const express = require("express");
const billMiddlewere = require("./middlewere/billmiddlewere")
const app = express();

app.get("/getAll",billMiddlewere.findAll);
app.get("/", (req,res)=>{
    res.send("bill page")
})

app.post("/find",billMiddlewere.findBy);
app.post("/addItem",billMiddlewere.insertMany);
app.post("/groupBy",billMiddlewere.groupBy);
app.put("/update", billMiddlewere.updateOne);

app.delete("/delete",billMiddlewere.deleteMany);


module.exports = app;