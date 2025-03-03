import mongoose from "mongoose";

const BookSchema =new mongoose.Schema({
    title:{
      type: String,
      trim: true,      
    },
    bookCover:{
        type:String
    },
    author: {
      type: String,
      trim: true
    },
    summary: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } );

export default mongoose.model("User",BookSchema);