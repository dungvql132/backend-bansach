const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const billRouter = require("./router/billRouter");
const bookRouter = require("./router/bookRouter");
const userRouter = require("./router/userRouter");
const loginRouter = require("./router/loginRouter");
const loginmiddlewere = require("./router/middlewere/loginmiddlewere")
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

// app.use("/bill",loginmiddlewere.checklogin,billRouter);
// app.use("/book",loginmiddlewere.checklogin,bookRouter);
// app.use("/user",loginmiddlewere.checklogin,userRouter);

app.use("/bill",billRouter);
app.use("/book",bookRouter);
app.use("/user",userRouter);
app.use("/login",loginRouter)

app.listen(1302,()=>{
    console.log("server running");
})

module.exports = app;