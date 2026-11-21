const express = require("express");

const app = express()

app.get("/user", (req, res) => {
    try {
        throw new Error("Something went wrong");

    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.get("/user", (req, res, next) => {
    try {
        throw new Error("User not found");
    } catch (err) {
        next(err);
    }
});


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong");
});





app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

