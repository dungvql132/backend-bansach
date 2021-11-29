const mongoose = require("mongoose");
const connectMongo = require("./mongoConn")();

const Schema = mongoose.Schema;

const Bill = new Schema({
    idBuyer: { type: Schema.Types.ObjectId, ref: 'Users' },
    idBooks:{type: [Schema.Types.ObjectId], ref: 'Books'},
    type: { type: String, default: "basket" },
    count: { type: []},
    payDate: { type: Date, default: new Date() },
    cost: { type: Number, default: 0 }
})
// mongoose.model("Bills", Bill).find()
module.exports = mongoose.model("Bills", Bill);
