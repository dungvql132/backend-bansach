const express = require("express");
const bookmiddlewere = require("./middlewere/bookmiddlewere.js")
const app = express();

app.get("/getAll",bookmiddlewere.findAll);
app.get("/", (req,res)=>{
    res.send("book page")
})

app.post("/find",bookmiddlewere.findBy);
app.post("/addItem",bookmiddlewere.insertMany);
// app.post("/groupBy",bookmiddlewere.groupBy);

app.put("/update", bookmiddlewere.updateOne);

app.delete("/delete",bookmiddlewere.deleteMany);


module.exports = app;