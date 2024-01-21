const JWT= require('jsonwebtoken')
const { hashPassword, comparePassword } = require("../helpers/authHelper")
const userModel = require("../models/userModel")


const registerController= async (req, res)=>{
try{
const {name , email, password}= req?.body

//validation
if(!name){
    return res.status(400).send({
        success:false,
        message:'name is required'
    })
}
if(!email){
    return res.status(400).send({
        success:false,
        message:'email is required'
    })
}
if(!password || password.length < 6){
    return res.status(400).send({
        success:false,
        message:'password is required and 6 character mut be followed'
    })
}
const existingUser= await userModel.findOne({email})
if (existingUser){
    return res.status(500).send({
        success:false,
        message:'user alredy exist with this email'
    })
}
//hashPassword

const hashedPassword= await hashPassword(password)
//saveuser
const user= await userModel({name,email,password:hashedPassword}).save();

res.status(201).send({
    success:true,
    message:'registration sucess'
})
}catch(err){
    console.log(err)
    return res.status(500).send({
        success:false,
        message:'error in registration api'
    })
}


}

const loginController= async(req, res)=>{
const {email, password}= req.body;
    try{
if (!email || !password){
    return  res.status(500).send({
        success:false,
        message:'Please provide email and password '
    })
}
//find user 
const user = await userModel.findOne({email})

if (!user){
    return res.status(500).send({
        success:false,
        message:'user not found'
    })
}
const match= await  comparePassword(password, user.password);
if(!match){
    return res.status(500).send({
        message:'Invalid username or  Password',
        success:false
    })
}
//token JWT
const token =await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{
    expiresIn:'7d',
})

user.password=undefined
res.status(200).send({
    success:true,
    message:'login success',
    token,
    user,
})
    }catch(err){
console.log(err)
return res.status(500).send({
    success:false,
    message:'Error in login api',
    err
})
    }
}
module.exports= {registerController, loginController};