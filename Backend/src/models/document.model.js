import mongoose, { Types } from "mongoose";

const documentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },
    originalName:{
        type:String,
        required:true,
    },
    storedName:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["processing","ready","failed"],
        default:"processing"
    },
    chunkCount:{
        type:Number,
        default: 0
    }
},{timestamps:true})

export const Document = new mongoose.model("Document",documentSchema)