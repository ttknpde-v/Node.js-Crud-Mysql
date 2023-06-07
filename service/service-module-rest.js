const serviceDirectSql = require('./service-direct-sql')
class ServiceModuleRest extends serviceDirectSql {

    #express = require('express')
    #bodyParser = require('body-parser')

    get express() {
        return this.#express;
    }

    get bodyParser() {
        return this.#bodyParser;
    }
}

module.exports = ServiceModuleRest