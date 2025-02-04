import mongoose from "mongoose";


//** Create a User schema */
const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    phoneNumber :{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        default:"customer"
    },
    password:{
        type:String,
        required:true
    }
    

})

const User = mongoose.model("User",userSchema)

export default User;