const uuid = require("uuid").v4
const fs = require("fs")
const path = require("path")
const YAML = require("js-yaml")
const loadYaml = filename => YAML.load(fs.readFileSync(path.resolve(filename)).toString().replace(/\t/gm, " "))
const config = loadYaml(path.join(__dirname,"../../../.config/db/solr.conf.yml"))
const { extend, set } = require("lodash")
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
            name: ["search"],
            _execute: async (command, context) => {

            	let result

            	let collection = command.search.from || config.db.defaultCollection
            	axios.defaults.baseURL = config.db.baseURL 
	            	
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
        }   
    ]
}