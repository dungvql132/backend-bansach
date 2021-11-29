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

    async find(obj) {
        let result = {};
        try{
            result["data"] = await this.schema.find(obj || {}).populate('idBuyer').populate('idBooks')
            result["message"] = "success ghi de";
        }catch{
            result["message"] = "fail ghi de";
            result["data"] = {};
        }finally{
            return result;
        }
    }
}

const billModel  = new Bills(billSchema);
module.exports = billModel;