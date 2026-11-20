const express = require("express");


const app = express()

app.use("/",(req,res) => {
    res.send("Hello from the server")
})

app.use("/test",(req,res) => {
    res.send("Hello from test handlers")
})

app.use("/hello",(req,res) => {
    res.send("Hello from the dashboard")
})

app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

