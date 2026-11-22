const express = require("express");
const connectDB = require("./config/database")
const User = require("./models/user")


const app = express()

//Signup
app.post("/signup", async (req, res) => {
    const user = new User( {
        firstName : "Ankit",
        lastName : "Kumar",
        emailId : "ankit@gmail.com",
        password : "Ankit@123"
    })

    await user.save();
    res.send("Signup succesfully")
})



connectDB().then(() => {
    console.log("Database is connected")
    app.listen(3000, ()=> {
    console.log("app is listening on port 3000")
})

}).
catch((err) => {
    console.log(err.message);
})


