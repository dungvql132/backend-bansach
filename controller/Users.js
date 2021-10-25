const MongooseModel = require("./MongooseModel")
const userSchema = require("../model").userSchema;

class Users extends MongooseModel{
    constructor(schema){
        super(schema);
    }
}

const userModel  = new Users(userSchema);
module.exports = userModel;