const validator = require("validator")


const signupValidation = (req) => {

    const {firstName , lastName, emailId , password} = req.body

    if(!firstName || !lastName) {
        throw new Error("Please enter your name")
    }
    else if(firstName.length < 4 || firstName.length > 50 ){
        throw new Error("Invalid Name")
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Invalid email")
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter strong password")
    }
}

module.exports = {
    signupValidation
}