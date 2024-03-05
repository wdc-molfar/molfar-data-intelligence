const Builder = require("./builder")
const { extend } = require("lodash")
const path = require("path")
const YAML = require("js-yaml")
const fs = require("fs")
const loadYaml = filename => YAML.load(fs.readFileSync(path.resolve(filename)).toString().replace(/\t/gm, " "))

const test = async script => {
	builder = new Builder()
	const result = await builder.execute(script, {})
	console.log(JSON.stringify(result, null, " "))
	// console.log(JSON.stringify(result, null, " "))
}

let file = process.argv[2]
console.log(`TEST ${path.resolve(file)}`)
if(file){
	let script = loadYaml(file)
	test(script)
} else {
	console.log("NO test script")
}

