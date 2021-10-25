const mongoose = require("mongoose");
const database = "CuoiKhoaFullStack52"
function connectMongo() {
    mongoose.connect("mongodb+srv://dungvq123:dunglan123@cluster0.yyxl5.mongodb.net/CuoiKhoaFullStack52?retryWrites=true&w=majority", { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "loi roi"));
    db.once('open', function () {
        // console.log("thanh cong");
    })
    // mongoose.set('strictQuery', false);
}

// let Model = mongoose.model;

module.exports = connectMongo;