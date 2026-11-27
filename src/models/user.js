const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        minLength: 4,
        maxLength: 50,
    },
    lastName : {
        type : String,
        trim : true
    },
    emailId: {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        validate(value) {
        if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender data is not valid");
       }
      },
    },
    photoUrl: {
      type: String,
      default: "https://geographyandyou.com/images/user-profile.png",
    },
    age : {
        type : Number,
        min : 18
    },
    skills : { 
       type : [String]
    }
    
},{
    timestamps : true
}
)

const User = mongoose.model("User", userSchema)

module.exports = User;