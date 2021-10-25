const express = require("express");
const usermiddlewere = require("./middlewere/usermiddlewere.js")
const app = express();

app.get("/getAll",usermiddlewere.findAll);
app.get("/", (req,res)=>{
    res.send("user page")
})

app.post("/find",usermiddlewere.findBy);
app.post("/addItem",usermiddlewere.insertMany);
// app.post("/groupBy",bookmiddlewere.groupBy);

app.put("/update", usermiddlewere.updateOne);

app.delete("/delete",usermiddlewere.deleteMany);


module.exports = app;