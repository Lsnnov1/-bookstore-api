const express = require("express")
const app = express()
const router =  new express.Router()

app.use(express.json())

const bkroutes = require("./routes/books")
app.use('books', bkroutes)


module.exports = app;