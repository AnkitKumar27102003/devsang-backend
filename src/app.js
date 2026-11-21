const express = require("express");


const app = express()

// why we need middlewares>  here is the reason
// here we are authorizing admin for both routes but you can see authorization cheking code is same for all
// but we dont want like this to repeat code, we want to make it simpler so we will use middlewares

app.get("/admin/getAllData", (req,res) => {
    const token = "xyz"

    const isAdminAuthorized = token === "xyz"
    if(isAdminAuthorized) {
        res.send("All data sent")
    }
    else{
        res.status(401).send("Unauthorized request")
    }
})

app.get("/admin/deleteAllData", (req,res) => {
    const token = "xyzt"

    const isAdminAuthorized = token === "xyz"
    if(isAdminAuthorized) {
        res.send("delete data sent")
    }
    else{
        res.status(401).send("Unauthorized request")
    }
})


app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

