const mongoose = require("mongoose");
const connectMongo = require("./mongoConn")();

const Schema = mongoose.Schema;

const User = new Schema({
email : {type: String,unique:true, default : ""},
userName : {type: String, default : ""},
password : {type: String, default : ""},
phone : {type: String, default : ""},
kindPerson : {type: String, default : ""},
birthday : {type: String, default : ""},
age : {type: Number, default : 0}
})
// mongoose.model("Bills", Bill).find()
module.exports = mongoose.model("Users", User);
