const mongoose=require("mongoose")

const StudentSchema= new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:[true,"Email is Already Used"]
    },
    Password:{
        type:Number,
        required:true,
    },
    ConfrimPassword:
    {
        type:Number,
        required:true
    }
})

const Register= new mongoose.model("Register",StudentSchema)
module.exports=Register;