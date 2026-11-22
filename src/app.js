const express = require("express");
const connectDB = require("./config/database")

const app = express()



connectDB().then(() => {
    console.log("Database is connected")
    app.listen(3000, ()=> {
    console.log("app is listening on port 3000")
})

}).
catch((err) => {
    console.log(err.message);
})


