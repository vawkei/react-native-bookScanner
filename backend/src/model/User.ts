import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "please enter email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password:{
    type:String,
    trim:true,
    required:[true,"please enter password"],
    minlength:[6,"password should be at lease 6 characters"]
  },
  isRegistered:{
    type:Boolean,
    default:false
  },
},{timestamps:true});

export default mongoose.model("User",UserSchema)