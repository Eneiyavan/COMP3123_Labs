const express = require("express")
const fs = require("fs")
const dateFormat = require("dateformat").default || require("dateformat");

var books = require("./Books")
var computers = require("./Computers")
const { error } = require("console")

const app = express()
const router = express.Router()

let writeData = (data) => {
    data +=  "\r\n"
    fs.appendFile("server_log.txt", data, function (error){
        if (error){
        throw error
    }
    console.log("Log Saved")
    })
}

//Middle function
let logger =(request, response, next) => {
    const today = dateFormat(new Date(), "dddd, mm, dS, yyyy, h:MM:ss TT")
    let data = `[${today}] - ${request.originalUrl}`
    writeData(data)
    next()
}

app.use(logger)

let booksLogger = (request, response, next) => {
    console.log("Books logger was called")
    next()

}
app.use(booksLogger)
app.use("/books", booksLogger , books)
app.use("/books/computers", computers)

app.listen(process.env.port || 8081)
console.log("Web server is listening at this port:" + (process.env.port || 8081))