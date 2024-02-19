import express from "express";
import { regestration,login,GetUserData,deleteUser,updateUserActive,updateUserInactive } from "../controllers/auth.js";
import { getProduct } from "../controllers/productdata.js";
 
const route=express.Router();
route.post("/regestration",regestration);
route.post("/login",login);
route.get("/users",GetUserData);
route.delete("/users/:id",deleteUser);
route.put("/user/active/:id",updateUserActive);
route.put("/user/inactive/:id",updateUserInactive);
route.get("/products",getProduct);
route.get("/",(req,res)=>{
    res.send("WELCOME TO MY WEBSITE.....")
})
export default route