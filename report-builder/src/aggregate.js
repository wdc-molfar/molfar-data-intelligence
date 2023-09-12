const mongodb = require("./utils/mongodb")

const path = require("path")

const loadYaml = filename => require("js-yaml").load(require("fs").readFileSync(path.resolve(filename)).toString().replace(/\t/gm, " "))

const config = loadYaml(path.join(__dirname,"../.config/db/mongodb.conf.yml"))



const aggregate = async (req, res) => {
	
	try {
		
		let options = req.body || {}
		let collection = options.collection
		let pipeline = options.pipeline || []
		
		console.log(collection, pipeline)

		let result = await mongodb.aggregate({
			db: config.db,
			collection,
			pipeline
		})
		console.log(result)
		
		res.send(result)
	
	} catch (e) {
		res.send({
			error: e.toString()
		})
	}	
}


module.exports = {
	aggregate
}