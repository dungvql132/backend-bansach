const bookModel = require("../../controller/index").bookModel;

async function insertMany(req, res) {
    try {
        let result = await bookModel.insertMany(req.body.data);
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
        let result = await bookModel.deleteMany(req.body.data);
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
        let result = await bookModel.find(req.body.data);
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
    try {
        let result = await bookModel.find();
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

async function updateOne(req, res) {
    try {
        let myData = req.body.data;
        let result = await bookModel.updateOne(myData.oldValue, myData.newValue);
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
    updateOne,
}