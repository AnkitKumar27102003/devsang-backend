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
        res.status(500).send("Something went wrong")
    }
})

//Delete user by id
app.delete("/user/:id", async (req, res) => {

    const userId = req.params.id;

    try {
        

        if (await User.findByIdAndDelete(userId)) {
            res.send("User deleted successfully");
        }
        else {
            res.status(404).send("User not found");
        }

    }
    catch (err) {
        res.status(500).send("Something went wrong");
    }

});

//update user
app.patch("/user/:userId", async (req, res) => {
    const data = req.body;
    const userId = req.params.userId;

    try {
        console.log("User ID:", userId);
        console.log("Data:", data);

        const ALLOWED_UPDATES = ["skills", "age", "gender", "photoUrl"];

        const isAllowedUpdate = Object.keys(data).every((k) =>
            ALLOWED_UPDATES.includes(k)
        );

        if (!isAllowedUpdate) {
            return res.status(400).send("Unable to update");
        }

        if(data.skills.length > 10){
            throw new Error("Skills can't be more than 10")
        }

        const user = await User.findByIdAndUpdate(
            userId,
            data,
            {
                runValidators: true,
                new: true,

            }
        );

        console.log("Updated User:", user);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send("User updated successfully");

    } catch (err) {
        console.error("PATCH ERROR:", err);
        res.status(500).send(err.message);
    }
});


connectDB().then(() => {
    console.log("Database is connected")
    app.listen(3000, ()=> {
    console.log("app is listening on port 3000")
})

}).
catch((err) => {
    console.log(err.message);
})


