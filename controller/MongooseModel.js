let schema = require("../model/Bill.schema.js");

class MogooseModel {
    constructor(schema) {
        this.schema = schema
    }

    async insertOne(obj) {
        let result = {};
        try{
            result["data"] = await this.schema.create(obj);
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }// ok 

    async insertMany(listObj) {      
        let result = {};
        try{
            result["data"] = await this.schema.insertMany(listObj);
            result["message"] = "success";
        }catch(err){
            console.log("err: ",err);
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }// ok

    async deleteOne(obj) {
        let result = {};
        try{
            result["data"] = await this.schema.deleteOne(obj);
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }

    async deleteMany(obj) {
        let result = {};
        try{
            result["data"] = await this.schema.deleteMany(obj);
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }

    // updateOne(req,res) {
    //     this.schema.updateOne(objOld, objNew, (err, result) => {
    //         if(err){
    //             myResult["status"] = "error";
    //             res.json(myResult);
    //             throw err
    //         }
    //         myResult["status"] = result ? "success" : "fail";
    //         res.json(myResult);
    //     })
    // }

    async updateOne (oldValue, newValue){
        let result = {};
        try{
            result["data"] = await this.schema.updateOne(oldValue,newValue);
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }

    async updateMany (oldValue, newValue){
        let result = {};
        try{
            result["data"] = await this.schema.updateMany(oldValue,newValue);
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }

    async find(obj) {
        let result = {};
        try{
            result["data"] = await this.schema.find(obj || {});
            result["message"] = "success";
        }catch{
            result["message"] = "fail";
            result["data"] = {};
        }finally{
            return result;
        }
    }


    async findAndGroupBy(type,obj){
        let datas;
        let result = {};
        try{
            let findObj = obj || {};
            datas = await this.find(findObj);
            // console.log(data[0]);
            result["data"] = datas.data.reduce((car,cur)=>{
                car[cur[type]] = [...car[cur[type]] || [],cur];
                return car;
            },{})
            result["message"] = "success";
            // console.log(datas.data);
        }catch{
            result["data"] = {};
            result["message"] = "fail";
        }finally{
            return result;
        }
    }
}

// function hihi() {
//     new MogooseModel(schema).updateOne({idBook:"hihi"},{idUser:"dung dz 123"});
//     console.log("thanh cong roi");
// }
// hihi();
module.exports = MogooseModel;