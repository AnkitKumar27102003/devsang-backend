const express = require("express");

const {adminAuth} = require("./middlewares/auth")


const app = express()

app.get("/admin/getAllData", adminAuth ,(req,res) => {
    res.send("all data sent")
})

app.get("/admin/deleteAllData",adminAuth, (req,res) => {
    res.send("delete data sent")
})



app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

