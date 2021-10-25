const mongoose = require("mongoose");
const connectMongo = require("./mongoConn")();

const Schema = mongoose.Schema;

const Book = new Schema({
idProducer : {type: String, default : ""},
producerName : {type: String, default : ""},
bookName : {type: String, default : ""},
author : {type: String, default : ""},
img : {type: String, default : ""},
year : {type: Number, default : 2000},
cost : {type: Number, default : 0},
})
// mongoose.model("Bills", Bill).find()
module.exports = mongoose.model("Books", Book);
