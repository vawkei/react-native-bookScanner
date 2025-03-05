import {Request,Response} from "express";
import Book from "../../model/Book";8

export interface AuthenticatedRequest extends Request {
    user?: { userId: string; username: string };
  }

export const getBooksFromDb =async (req:AuthenticatedRequest,res:Response)=>{
    
    const userId = req.user?.userId
    try{
        const books = await Book.find({createdBy:userId}).sort("-createdAt");
        res.status(200).json({books:books,nbhits:books.length})

    }catch(error){
        const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("google book api error:", message);
    }
    // console.log("this is getBooksFromDb route")
}

