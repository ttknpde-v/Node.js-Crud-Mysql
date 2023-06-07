const restEndpoint = require('../controller/rest-endpoint')
const configDatabase = require('../configuration/config-database') // store class it is not already to use
let ConfigDatabase = new configDatabase() // create object class , it is already to use

let express = ConfigDatabase.express // called method get
let bodyParser = ConfigDatabase.bodyParser
let port = process.env.PORT || 8080;

// set default for post rest api
let application = express()
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({
    extended : true
}))


application.get('/api/reads',restEndpoint.reads)
application.get('/api/reads/(:price)',restEndpoint.readsByPrice)
application.get('/api/read/(:id)',restEndpoint.readsById)
application.post('/api/create',restEndpoint.create)
application.put('/api/update/(:id)',restEndpoint.update)
application.delete('/api/delete/(:id)',restEndpoint.deleteById)



application.listen(port ,(errors) => {
    if (!errors) {
        console.log(`You're in port ${port}`)
    }
    else {
        console.log(errors.message)
    }
})
