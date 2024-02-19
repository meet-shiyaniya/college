import mongoose from "mongoose";
import { product } from "../models/productdata.js";


const getProduct=async(req,res)=>{
    try {
        const productdata = await product.find();
        return res.status(200).json(productdata)

    } catch (error) {
        return res.status(500).json({message:"Server Failed"})
    }
}

export {getProduct};