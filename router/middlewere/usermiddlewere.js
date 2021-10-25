const userModel = require("../../controller/index").userModel;

async function insertMany(req,res){
    let myData = req.body.data;
    // console.log(myData);
    let result = await userModel.insertMany(req.body.data);
    res.json(result);
}

async function deleteMany(req,res){
    let result = await userModel.deleteMany(req.body.data);
    res.json(result);
}

async function findBy(req,res){
    let result = await userModel.find(req.body.data);
    res.json(result);
}

async function findAll(req,res){
    // console.log(req.headers.token);
    let result = await userModel.find();
    res.json(result);
}

async function updateOne(req,res){
    let myData = req.body.data;
    let result = await userModel.updateOne(myData.oldValue,myData.newValue);
    res.json(result);
}

module.exports = {
    insertMany,
    deleteMany,
    findBy,
    findAll,
    updateOne,
}