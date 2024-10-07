const mongoose=require('mongoose');

const contactschema = mongoose.Schema({
  user_id:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:"User",
  },
  name:{
      type: String,
      required: [true," Please add you name"]
},
email:{
          type: String,
           required: [true," Please add you mail here"]
},
designation:{
 type: String, 
  required: [true," Please add you designation"]
},
place:{
  type: String, 
  required: [true," Please tell us your place"]
},
salary:{
  type: String, 
  required: [true," Please add your salary"]
}
},
{
timestamp:true,
},
);
module.exports= mongoose.model("Contact",contactschema);