const userModel = require("../../controller/index").userModel;
const jwt = require("jsonwebtoken");

async function register(req, res) {
    try {
        let result = await userModel.insertOne(req.body.data);
        res.json({
            status: result.message == 'fail'? 400:200,
            ...result,
        });
    } catch (error) {
        res.json({
            status: 400,
            message: "user exists"
        })
    }
}

async function login(req, res) {
    try {
        let { email, password } = req.body.data;
        let user = await userModel.find({ email });
        if (password == user.data[0].password) {
            var token = jwt.sign({ ...user.data[0] }, "dungvq123");
            res.json({
                status: 200,
                token,
                message: "success"
            })
        } else {
            res.json({
                status: 404,
                message: "user or password does not exist"
            })
        }
    } catch (error) {
        res.json({
            status: 500,
            message: "user or password does not exist"
        })
    }
}

async function checklogin(req, res, next) {
    let token = req.headers.token;
    if (token == '') {
        res.json({
            status: 400,
            message: "not login yet",
        })
    } else {
        try {
            let decoded = jwt.verify(token, 'dungvq123');
            req.body.token = { ...decoded["_doc"] };
            next();
        } catch (error) {
            res.json({
                status: 400,
                message: "wrong token",
            })
        }
    }
}

module.exports = {
    register,
    login,
    checklogin
}