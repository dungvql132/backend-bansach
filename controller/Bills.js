const MongooseModel = require("./MongooseModel")
const billSchema = require("../model").billSchema;

class Bills extends MongooseModel{
    constructor(schema){
        super(schema);
    }

    findSortDate(obj) {
        this.schema.find(obj).sort({payDate: -1}).exec((err, docs)=>{
            if (err) throw err
            console.log(docs);
        })
    }
}

const billModel  = new Bills(billSchema);
module.exports = billModel;