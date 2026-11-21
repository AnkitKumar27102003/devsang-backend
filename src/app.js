const express = require("express");


const app = express()

//we can use app.use for all routes starting with /admin and will write authorization code here and will reause everywhere for admin
app.use("/admin", (req,res,next) => {
    const token = "xyez"

    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized) {
        res.status(401).send("Unauthorized request")
    }
    else{
        next()
    }

})

app.get("/admin/getAllData", (req,res) => {
    res.send("all data sent")
})

app.get("/admin/deleteAllData", (req,res) => {
    res.send("delete data sent")
})

//here we have written simpler code by using middleware and we doesnt have to repeat code


app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

