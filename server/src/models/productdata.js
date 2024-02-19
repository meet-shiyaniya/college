import mongoose from "mongoose";

const productschema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    colors:{
        type:String,
        default:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    shipping:{
        type:String,
        required:true
    }
})

export const product = mongoose.model("product",productschema)