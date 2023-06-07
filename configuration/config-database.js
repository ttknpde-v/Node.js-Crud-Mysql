const serviceModuleRest = require('../service/service-module-rest')
class ConfigDatabase extends serviceModuleRest {
    #infoDatabase = {
        h : "127.0.0.1" ,
        u : ""***"" ,
        p : "***" ,
        port : ""***"" ,
        d : "bookstore"
    }
    #mysql = require('mysql2');

    connectDatabase () {
       return this.#mysql.createConnection({
            host : this.#infoDatabase.h,
            user : this.#infoDatabase.u,
            password : this.#infoDatabase.p ,
            port : this.#infoDatabase.port ,
            database : this.#infoDatabase.d
       })
    }
}

module.exports = ConfigDatabase
/*

let c = new ConfigDatabase()
c.connectDatabase().connect(function (errors) {
    if (errors) console.log(errors.message)
    else console.log('connected')
})

*/
