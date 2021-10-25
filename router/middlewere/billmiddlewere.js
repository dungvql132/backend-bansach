const billModel = require("../../controller/index").billModel;

async function insertMany(req,res){
    let result = await billModel.insertMany(req.body.data);
    res.json(result);
}

async function deleteMany(req,res){
    let result = await billModel.deleteMany(req.body.data);
    res.json(result);
}

async function findBy(req,res){
    let result = await billModel.find(req.body.data);
    res.json(result);
}

async function findAll(req,res){
    // console.log(req.headers.token);
    let result = await billModel.find();
    res.json(result);
}

async function groupBy(req,res){
    const data = req.body.data;
    // console.log(data);
    let result = await billModel.findAndGroupBy(data.type,data.findObj);
    // res.send("vao group by nhe")
    res.json(result);
}

module.exports = {
    insertMany,
    deleteMany,
    findBy,
    findAll,
    groupBy,
}