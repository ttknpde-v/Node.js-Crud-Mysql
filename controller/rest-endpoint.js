const configDatabase = require('../configuration/config-database') // store class it is not already to use
let ConfigDatabase = new configDatabase() // create object class , it is already to use
let connectDatabase = ConfigDatabase.connectDatabase() // called function/method inside object class

/*
const testRest = (request , response) => {
    response.status(200).json({message:"request & response it's success"})
}
can export function to display another file
declare like this
*/

const reads = (request , response) => {
    connectDatabase.query(ConfigDatabase.selectAll, function (err, result, fields) {
        // when select table result arg it'll store value of table
        if (!err) {
            response.status(202).json({
                message: "accepted reads",
                books: result
            })
        } else {
            console.log(err.message)
        }
    })
}

const readsByPrice = (request , response) => {
    let priceForCondition = request.params["price"]
    connectDatabase.query(ConfigDatabase.selectByPrice , [priceForCondition] , function (err, result, fields) {
        if (!err) {
            response.status(202).json({
                message: "accepted reads by price books condition",
                books: result
            })
        }
        else {
            console.log(err.message)
        }
    })
}

const readsById = (request , response) => {
    let id = request.params["id"]
    connectDatabase.query(ConfigDatabase.selectById , [id] , function (err, result, fields) {
        if (!err) {
            response.status(202).json({
                message: "accepted read",
                books: result
            })
        }
        else {
            console.log(err.message)
        }
    })
}

const create = (request , response) =>  {
    let {bookName , bookPrice , bookSale} = request.body // name variable should be same name request from post man
    connectDatabase.query(ConfigDatabase.insert , [bookName , bookPrice , bookSale] , function (err, result, fields) {
        if (!err) {
            response.status(201).send(
                {message:"created"
                    ,bookName:bookName
                    ,bookPrice:bookPrice
                    ,bookSale:bookSale
                    ,status : result}
            )
        }
        else {
            console.log(err.message)
        }
    })
}

const update = (request , response) =>   {
    let id = request.params["id"]
    let {bookName , bookPrice , bookSale} = request.body // name variable should be same name request from post man
    connectDatabase.query(ConfigDatabase.update , [bookName , bookPrice , bookSale , id] , function (err, result, fields) {
        if (!err) {
            response.status(202).send(
                {message:"updated"
                    ,bookId:id
                    ,bookName:bookName
                    ,bookPrice:bookPrice
                    ,bookSale:bookSale
                    ,status : result}
            )
        }
        else {
            console.log(err.message)
        }
    })
}

const deleteById = (request , response) =>   {
    let id = request.params["id"]
    connectDatabase.query(ConfigDatabase.delete , [id] , function (err, result, fields) {
        if (!err) {
            response.status(200).json({
                message:"deleted"
            })
        }
        else {
            console.log(err.message)
        }
    })
}


module.exports = {
    reads ,
    readsByPrice ,
    readsById ,
    create ,
    update ,
    deleteById
}