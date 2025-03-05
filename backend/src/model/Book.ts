import mongoose from "mongoose";

const BookSchema =new mongoose.Schema({
    title:{
      type: String,
      trim: true,
      required:[true,"book title missing"]      
    },
    imageLinks: {
      thumbnail: { type: String }, //objeckt of stringzzzz
      smallThumbnail: { type: String }, //objeckt of stringzzzz
    },
    author: {
      type: [String],
      trim: true,
      default:[]
    },
    description: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    publishedDate:{
      type:String,
      trim:true
    },
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:"User",
      required:[true,"please provide user"]
    }
  },
  { timestamps: true } );

export default mongoose.model("Book",BookSchema);