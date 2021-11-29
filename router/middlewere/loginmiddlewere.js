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
        res.status(400).json({
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


var nodemailer = require('nodemailer');
const option = {
    service: 'gmail',
    auth: {
        user: 'dungvq123@gmail.com', // email hoặc username
        pass: 'dunglan123A' // password
    }
};
var transporter = nodemailer.createTransport(option);

async function forgetPass(req, res, next) {
    console.log("vao ham quen mat khau");
    let newpass = ""+(Math.floor(Math.random() * 90000) + 10000);
    console.log("pass moi: ", newpass);

    console.log("req data: ",req.body.data);
    transporter.verify(function(error, success) {
        // Nếu có lỗi.
        if (error) {
            console.log(error);
            res.json({
                status: 400,
                message: "fail change password",
            })
        } else { //Nếu thành công.
            console.log('Kết nối thành công!');
            var mail = {
                from: 'dungvq123@gmail.com', // Địa chỉ email của người gửi
                to: req.body.data.email, // Địa chỉ email của người gửi
                subject: 'Thư được gửi bằng Node.js', // Tiêu đề mail
                text: 'new pass word: '+newpass, // Nội dung mail dạng text
            };
            //Tiến hành gửi email
            transporter.sendMail(mail, function(error, info) {
                if (error) { // nếu có lỗi
                    console.log(error);
                    res.json({
                        status: 400,
                        message: "fail change password",
                    })
                } else { //nếu thành công
                    console.log('Email sent: ' + info.response);
                    userModel.updateOne({
                        "email":req.body.data.email
                    },{
                        "password":newpass
                    })
                }
            });
        }
    });
    res.json({
        status: 200,
        message: "success change password",
    })
}


module.exports = {
    register,
    login,
    checklogin,
    forgetPass
}