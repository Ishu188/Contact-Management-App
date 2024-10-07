const express=require('express');
const asyncHandler= require('express-async-handler');
const User = require('../model/user.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const registerUser=asyncHandler(async(req,res)=>{
  const {username,email,password} = req.body;
  if(!username || !email || !password){
    res.status(400);
    throw Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({email});
  if(userAvailable){
    res.status(400);
    throw Error("User already exists");
  }

  const hashedpassword = await bcrypt.hash(password,10);

  const user = User.create({
    username,
    email,
    password:hashedpassword
  });
  console.log(`User created ${user}`);
  if(user){
    res.status(201).json({_id:user.id, email:user.email});
  }else{
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({message: "Registered user" });
});



const loginUser=asyncHandler(async(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({email});

  if(user && (await bcrypt.compare(password,user.password))){
    const accesstoken = jwt.sign({
      username:user.username,
      email:user.email,
      id:user.id,
    },
  process.env.PROCESS_TOKEN_SECRET,
  {expiresIn: "15m"}
  );
  res.status(200).json({accesstoken});
  }else{
    res.status(400);
    throw new Error("email or password is not valid");
  }
  res.json({message:"Login user"});
});


const currentUser=asyncHandler(async(req,res)=>{
  res.json(req.user);
});

module.exports={
  registerUser,
  loginUser,
  currentUser
}