const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please add username"]
  },
  email:{
    type:String,
    required:[true,"Please add your e-mail"],
    unique:[true,"email is already taken"]
  },
  password:{
    type:String,
    required:[true,"Add your password here"]
  }
},
{
  timestamp:true
}
);

module.exports= mongoose.model("User",userSchema);