const uuid = require("uuid").v4
const fs = require("fs")
const path = require("path")
const YAML = require("js-yaml")
const loadYaml = filename => YAML.load(fs.readFileSync(path.resolve(filename)).toString().replace(/\t/gm, " "))
const config = loadYaml(path.join(__dirname,"../../../.config/db/solr.conf.yml"))
const { extend, set, keys, find, remove } = require("lodash")
const axios = require("axios")

const normalize = request => {
	
	if(request.query && request.query.custom){
		if(request.query.custom.$in){
			request.query = request.query.custom.$in.values.map( d => `${request.query.custom.$in.field}:"${d}"`).join(" OR ")
		}
		delete request.custom
	}
	
	if(request.highlight){
		request.params = extend({}, request.params, {
			"hl": true,
			"hl.fl": request.highlight.field,
		    "hl.simple.pre": (request.highlight.simple) ? request.highlight.simple.pre || "<em>" : "<em>",
		    "hl.simple.post": (request.highlight.simple) ? request.highlight.simple.post || "</em>" : "</em>",
		    "hl.fragsize": request.highlight.fragsize || 0
		})

		delete request.highlight
	}

	return request

}


const zipProperties = data => {
	let res = {}
	keys(data).forEach( key => {
		set(res, key, data[key])
	})
}

module.exports = {

    register: builder => {
        builderInstance = builder
		pluginContext = {
		    id: uuid(),
			temp: []
		}

    },

    
    commands: [

        {
            name: ["search","solr.search"],
            _execute: async (command, context) => {

            	command.search = command["solr.search"] || command.search

            	let result

            	let collection = command.search.from || config.db.defaultCollection
            	axios.defaults.baseURL = (command.search.on) ? command.search.on : config.db.baseURL 
	            	
            	if(command.search.select){
	            
	            	let query = command.search.select || {
	            		query:"*.*"
	            	}
	            	
	            	query = normalize(query)

	            	result = await axios.post(`/${collection}/query`,query)

	            	result = result.data


	            
	            } else {

	            	result = await axios.get(`/${collection}/sql?stmt=${encodeURIComponent(command.search.sql)}`)
	            	result = result.data
           	 
	            }	


            	if(command.search.into) {
            		set(context, command.search.into, result)
                }
            	
            	return context
            }
        },

        {
            name: ["stream", "solr.stream"],
            _execute: async (command, context) => {

            	let result
            	command.stream = command["solr.stream"] || command.stream
            	let collection = command.stream.from || config.db.defaultCollection
            	axios.defaults.baseURL = (command.stream.on) ? command.stream.on : config.db.baseURL 
	            	
            	if(command.stream.expr){
	            	
	            	result = await axios.get(`/${collection}/stream?expr=${encodeURIComponent(command.stream.expr)}`)
	            	result = result.data["result-set"]

	            	let f = find(result.docs, d => d.EOF)

	            	if(f && f.EXCEPTION){
	            		throw new Error(f.EXCEPTION)
	            	}

	            	remove(result.docs, d => d.EOF)


	            } else {

	            	 	throw new Error(`Expect "expr" in ${JSON.stringify(command, null, " ")}`)
	           
	            }	


            	if(command.stream.into) {
            		set(context, command.stream.into, result.docs)
                }
            	
            	return context

            }
        }   
    ]
}