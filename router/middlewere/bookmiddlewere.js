const bookModel = require("../../controller/index").bookModel;

async function insertMany(req,res){
    let result = await bookModel.insertMany(req.body.data);
    res.json(result);
}

async function deleteMany(req,res){
    let result = await bookModel.deleteMany(req.body.data);
    res.json(result);
}

async function findBy(req,res){
    let result = await bookModel.find(req.body.data);
    res.json(result);
}

async function findAll(req,res){
    // console.log(req.headers.token);
    let result = await bookModel.find();
    res.json(result);
}

async function updateOne(req,res){

    let myData = req.body.data;

    let result = await bookModel.updateOne(myData.oldValue,myData.newValue);
    res.json(result);
}

module.exports = {
    insertMany,
    deleteMany,
    findBy,
    findAll,
    updateOne,
}