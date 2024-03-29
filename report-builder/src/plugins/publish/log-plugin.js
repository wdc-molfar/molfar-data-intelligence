const moment = require("moment")
const $convert = require("../../utils/transform")

module.exports = {

    register: builder => {
   
        builderInstance = builder

    },


    commands: [

        {
            name: ["log"],
            _execute: async (command, context) => {
                
                let result = ""
                
                if(command.log.eval){
                    result = await eval(command.log.eval)(context)
                } else {
                    result = command.log
                }

                context._log = context._log || ""
                context._log += `\n[ ${moment(new Date()).format("YYYY.MM.DD HH:mm:ss")} ]: ${result}`

                return context
            }
        }
    
    ]
}