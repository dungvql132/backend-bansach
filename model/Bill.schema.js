const mongoose = require("mongoose");
const connectMongo = require("./mongoConn")();

const Schema = mongoose.Schema;

const Bill = new Schema({
idBook : {type: String, default : ""},
idProducer : {type: String, default : ""},
idUser : {type: String, default : ""},
payDate : {type:Date, default : Date.now},
cost : {type: Number, default : 0}
})
// mongoose.model("Bills", Bill).find()
module.exports = mongoose.model("Bills", Bill);
