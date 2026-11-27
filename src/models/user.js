const mongoose = require("mongoose")
const validator = require("validator")

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
        lowercase : true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate(value){
            if(!validator.isStrongPassword(value)) {
                throw new Error("invalid Valid please use strong password")
            }
        }
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
      validate(value) {
        if(!validator.isURL(value)) {
            throw new Error("Invalid Photo URL")
        }
      }
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