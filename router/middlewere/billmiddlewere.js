const billModel = require("../../controller/index").billModel;

async function insertMany(req, res) {
    try {
        let result = await billModel.insertMany(req.body.data);
        res.json({
            status: 200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
        })
    }
}

async function deleteMany(req, res) {

    try {
        let result = await billModel.deleteMany(req.body.data);
        res.json({
            status: 200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
        })
    }
}

async function findBy(req, res) {
    try {
        let result = await billModel.find(req.body.data);
        res.json({
            status: 200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
        })
    }
}

async function findAll(req, res) {
    // console.log(req.headers.token);
    try {
        let result = await billModel.find();
        res.json({
            status: 200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
        })
    }
}

async function groupBy(req, res) {
    try {
        const data = req.body.data;
        let result = await billModel.findAndGroupBy(data.type, data.findObj);
        res.json({
            status: 200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
        })
    }
}

module.exports = {
    insertMany,
    deleteMany,
    findBy,
    findAll,
    groupBy,
}