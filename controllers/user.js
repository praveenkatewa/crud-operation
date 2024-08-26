const User=require('../models/user')
exports.CreateUser=async(req,res)=>{
    const data=req.body
    const {email}=req.body
    const exsistingUser=await User.findOne({email})
    console.log(`>>>>>>existing user`,exsistingUser)
    if(exsistingUser){
        return res.status(400).json({message:"user already exist"})
    }
    const user=new User(data)
    await user.save();
    res.status(201).json(user)
}

exports.getAlluser=async(req,res)=>{
    const user=await User.find();
    res.status(201).json(user)
}
