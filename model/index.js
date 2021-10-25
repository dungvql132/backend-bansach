const conn = require("./mongoConn");
const billSchema = require("./Bill.schema");
const userSchema = require("./User.schema");
const bookSchema = require("./Book.schema");

module.exports ={
    conn,
    billSchema,
    userSchema,
    bookSchema,
}