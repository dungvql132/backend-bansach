const express = require("express");
const loginmiddlewere = require("./middlewere/loginmiddlewere")
const app = express();

app.get("/", (req,res)=>{
    res.send("login page")
})

app.get("/getCurrentUser",loginmiddlewere.checklogin,(req,res)=>{
    res.json({
        status : 200,
        data : req.body.token,
    })
})

app.post("/signin",loginmiddlewere.login);
app.post("/forgetpass",loginmiddlewere.forgetPass);
app.post("/check",loginmiddlewere.checklogin,(req,res)=>{
    const {data, token} = body;
    res.json({
        ...{data, token},
        status:200
    });
});

app.post("/register",loginmiddlewere.register);


module.exports = app;