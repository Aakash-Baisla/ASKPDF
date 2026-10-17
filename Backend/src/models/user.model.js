import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:[true,"Password is required"]
        
    },
    refreshToken: {
        type:String
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)