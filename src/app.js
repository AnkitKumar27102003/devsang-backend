const express = require("express");
const connectDB = require("./config/database")
const User = require("./models/user")


const app = express()

app.use(express.json())

//Signup
app.post("/signup", async (req, res) => {
    
    const user = new User(req.body)

    try {
        await user.save();
        res.send("Signup succesfully")
    }
    catch(err) {
        res.status(400).send("Something went wrong" + err.message)
    }
})

//Get one User from DB using email
app.get("/user",async (req,res) => {

    const email = req.body.emailId;

    try  {
        const user = await User.findOne({emailId : email })
        if(user.length == 0){
            res.send("User Not Found")
        }
        else{
               res.send(user)
        }
    }
    catch(err) {
        res.status(401).send("Something went wrong")
    }
})

//find by Id
app.get("/getbyid/:id",async (req,res) => {
    const id = req.params.id;

    try {
        const user = await User.findById({_id : id})
        if(user.length == 0){
            res.send("Something went wrong")
        }
        else{
            res.send(user)
        }
    }
    catch(err) {
        res.status(401).send("something went wrong")
    }
})

//Fetch all user
app.get("/feed",async (req,res) => {
    try {
        const alluser =await User.find({})
        if(alluser.length == 0){
            res.send("User not fourd")
        }
        else{
            res.send(alluser)
        }
    }
    catch(err) {
        res.status(401).send("Something went wrong")
    }
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


