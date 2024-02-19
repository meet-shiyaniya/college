import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
// import nodemailer from "nodemailer";

//for send mail
// const sendVerifyMail=async(name , email ,_id )=>{
//     try {
//         nodemailer.createTransport({
            
//         })
//     } catch (error) {
//         console.log({status:500,message:"Server Failed !"});
//     }
// }
const regestration = async (req, res) => {
    try {
        console.log("Reg run !")
        const { name, email, phone, password, cpassword, active } = req.body;
        
        const emailcheck = await User.findOne({ email });
        if (!(name && email && phone && password && cpassword)) {
            return res.status(400).json({ message: "All Fileds Are Required" })
        }
        if (emailcheck) {
            return res.status(400).json({ message: "Email Is Already Exists !" })
        }
        if (password !== cpassword) {
            return res.status(400).json({ message: "Confirm Password Does Not Match As Password" })
        }
        const hpass= await bcrypt.hash(password,10);
        // sendVerifyMail(req.body.name , req.body.email , newUser._id );
        const reguser = await new User({ name, email, phone, password:hpass, active });
        reguser.save();
        const newUser = await User.findById(reguser._id).select("-password")
        return res.status(200).json({ message: "Regestration Successfully", data: newUser })
    } catch (error) {
        return res.status(500).json({ message: "Server Failed !" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
         
        if(email && password){
            const emailcheck = await User.findOne({ email });
            if(emailcheck){
                const passwordmatch=await bcrypt.compare(password,emailcheck.password);
                if(passwordmatch){
                    return res.status(200).json({ message: "Login Successfully....." });
                }
                return res.status(400).json({ message: "Password Incorrect" });
            }
            return res.status(400).json({ message: "Please,First You Can Regester With This Email" });
        }
        return res.status(400).json({ message: "All Fileds Are Required" });
    } catch (error) {
        return res.status(500).json({message:"Server Failed !"})
    }
}

const GetUserData = async (req, res) => {

    try {
        const doc = await User.find();
        res.status(200).json(doc);
    } catch (error) {
        return res.status(500).json({message:"Server Failed"})
    }
}

const deleteUser = async (req, res) => {
    const id = req.params['id']
    try {
        await User.findOneAndDelete({ "_id": id })
            .then(() => console.log("delete success"))
            .catch((e) => {
                console.log(e)
            })

        res.status(200).json({ message: "deleted successfully" })

    } catch (error) {
        return res.status(500).json({message:"Server Failed"})
    }
}

const updateUserActive= async(req,res)=>{
    try {
        console.log("Update");
        const _id= req.params.id;
        if(_id){
            const newUser= await User.findByIdAndUpdate(_id, {active:false});
            newUser.save();
            return res.status(200).json({message:"Update Successfully"})
        }
        return res.status(400).json({message:"Id Must Required"})
    }
     catch (error) {
        return res.status(500).json({message:"Server Failed"})
    }
}

const updateUserInactive= async(req,res)=>{
    try {
        console.log("Update");
        const _id= req.params.id;
        if(_id){
            const newUser= await User.findByIdAndUpdate(_id, { active:true });
            newUser.save();
            return res.status(200).json({message:"Update Successfully"})
        }
        return res.status(400).json({message:"Id Must Required"})
    } catch (error) {
        return res.status(500).json({message:"Server Failed"})
    }
}



export { regestration, login, GetUserData, deleteUser,updateUserActive,updateUserInactive };
