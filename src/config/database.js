const mongoose = require("mongoose");


const url = "mongodb+srv://ADDI0147C:Ankit123asdf@cluster0.mdtnub5.mongodb.net/devSang"

const connectDB = async () => {
    await mongoose.connect(url)
}

module.exports = connectDB;

