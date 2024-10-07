const express=require('express');
const asyncHandler = require('express-async-handler');
const Contact= require("../model/contact.model");

const getContacts= asyncHandler(async(req,res)=>{
  const contacts=  await Contact.findById(req.params.id);
  if(!contacts){
    res.status(404);
    throw new Error("NOT FOUND");
  }

  res.status(200).json(contacts);
});

const postContacts= asyncHandler(async(req,res)=>{
  console.log("request body is", req.body);
  const {name,email,designation,place,salary} = req.body;
  if(!name && !email && ! designation && !place && !salary){
    res.status(400);
    throw new Error("Incomplete data");
}
 const contacts= await Contact.create({
  name,
  email,
  designation,
  place,
  salary,
  user_id:req.user_id
})

  res.status(201).json(contacts);
});

const putContacts= asyncHandler(async(req,res)=>{
  res.status(200).json({message: `Updated for ${req.params.id}`});
})

const deleteContacts= asyncHandler(async(req,res)=>{
  const contacts=  await Contact.findById(req.params.id);
  if(!contacts){
    res.status(404);
    throw new Error("NOT FOUND");
  }
  await Contact.remove();
  res.status(200).json(contacts);
})

module.exports={
  getContacts,
  postContacts,
  putContacts,
  deleteContacts
}

