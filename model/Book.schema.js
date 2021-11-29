const mongoose = require("mongoose");
const connectMongo = require("./mongoConn")();

const Schema = mongoose.Schema;

const Book = new Schema({
idProducer : {type: String, default : ""},
producerName : {type: String, default : ""},
bookName : {type: String, default : ""},
author : {type: String, default : ""},
img : {type: String, default : ""},
description : {type: String, default : ""},
year : {type: Number, default : 2000},
cost : {type: Number, default : 0},
category : {type: String, default : ""},
place : {type: String, default : ""},
date : {type:Date, default : new Date()},
})
// mongoose.model("Bills", Bill).find()
module.exports = mongoose.model("Books", Book);

// person.index({ firstName: 1, lastName: 1}, { unique: true });