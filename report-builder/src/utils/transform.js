/**
 * Simple XML to JavaScript object converter.
 * @module xml2js
 * @see {@link https://www.npmjs.com/package/xml2js|xml2js - npm}
*/
const xml2js = require('xml2js')

/**
 * An implementation of YAML, a human-friendly data serialization language.
 * @module js-yaml
 * @see {@link https://www.npmjs.com/package/js-yaml|js-yaml - npm}
*/
const YAML = require("js-yaml")

/**
 * Csvjson helps you quickly convert popular data formats to the format you need.
 * @module csvjson
 * @see {@link https://csvjson.com/|csvjson}
*/
const csvjson = require("csvjson")

/**
 * Converts json into csv with column titles and proper line endings.
 * @module json2csv
 * @see {@link https://www.npmjs.com/package/json2csv|json2csv - npm}
*/
const json2csv = require("json2csv")

/**
 * A modern JavaScript utility library delivering modularity, performance & extras.
 * @module lodash
 * @see {@link https://lodash.com/|Lodash}
*/
const { toPairs, extend } = require("lodash")

const Parser = require('rss-parser')



module.exports = {
	
	rss2js: async (value, options) => {
		let parser = new Parser()
		let result = await parser.parseString(value)				
		return result
	},	
	
	xml2js: async (value, options) => {
			let result = await xml2js.parseStringPromise(value, options) 
			return result
	},
	
	js2xml: async (value, options) => {
			let builder = new xml2js.Builder();
			return builder.buildObject(value);
	},
	
	yaml2js: async (value, options) => {
			return YAML.load(value)
	},
	
	js2yaml: async (value, options) => {
			return YAML.dump(value)		
	},
	
	csv2js: async (value, options) => {

			options = options || {}
		
			let csvOptions = {
	          delimiter: options.delimiter || ";",
	          quote: options.quote || null
	        }
	        
		    let encode = options.encode || "utf8";

	        let data = new Buffer(value, encode).toString().trim();
		    data = csvjson.toObject(data, csvOptions);
		    return data
	},
	
	js2csv: async (value, options) => {

			options = options || {}

			let csvOptions = {
	          delimiter: options.delimiter || ";"
	        }
	        
		    let encode = options.encode || "utf8";
		    
		    let fields = toPairs(value[0]).map(item => item[0])

    		// let data  = new Buffer( json2csv(extend({ data: value, fields: fields}, csvOptions)), encode)
	        const parser = new json2csv.Parser(extend({ fields: fields},csvOptions));

		        let data  = parser.parse(value)
	        
		    return data
	}

}