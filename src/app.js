const express = require("express");


const app = express()

// app.use("/user", (req,res) => {
//     ye infinte sending reqest me phas jayega because we are not sending any response to the client
// })

// app.use("/user", (req,res) => {
//      console.log("i am a user") this also go in infinite loop
// })


app.use("/user", (req,res, next) => {
    // res.send("this will also go into the loop")
    // res.send("1st response")
    console.log("first handler")
    next()
},
(req,res,next) => {
    console.log("second handler")
    // res.send("2nd response")
    next()
},
[(req,res) => {
    console.log("third handler")
    next()
},
(req,res) => {
    res.send("4th response")
    console.log("Forth handler")
}]
)



app.listen(3000, ()=> {
    console.log("app is listening on port 3000")

})

