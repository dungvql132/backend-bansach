const MongooseModel = require("./MongooseModel")
const bookSchema = require("../model").bookSchema;

class Books extends MongooseModel{
    constructor(schema){
        super(schema);
    }
}

const bookModel  = new Books(bookSchema);
module.exports = bookModel;