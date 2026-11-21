const express = require("express");


const app = express()


// app.use("/hello",(req,res) => {
//     res.send("Hello from the dashboard")
// })

// app.use("/test/2",(req,res) => {
//     res.send("Hello from 2")
// })

// app.use("/test",(req,res) => {
//     res.send("Hello from test handlers")
// })


// app.use("/",(req,res) => {
//     res.send("Hello from the server")
// })


// app.use("/test/ankit/2",(req,res) => {
//     res.send("Hello from 2")
// })

//Handling GET, POST, PATCH and DELETE API Calls

app.get("/students", (req,res) => {
    res.send({name: "Ankit", roll: 23})

    console.log(req.query.age)
    console.log(req.query.city)

})

app.get("/students/:id", (req,res) => {
    const studentId = req.params.id;
    
    res.send(`student Id ${studentId}`)

})

app.use(express.json())

app.post("/students", (req,res)=> {
    const student = req.body;
    console.log(student)
    res.send("data sent succesfully");
})

app.patch("/students", (req,res) => {
    res.send("Update successfully")
})

app.delete("/students", (req,res) => {
    res.send("delete successfully")
})


app.get("/home", (req,res) => {
    res.send("Home Details")
})

app.get("/about",(req,res) => {
    res.send("About Page")
});



app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

