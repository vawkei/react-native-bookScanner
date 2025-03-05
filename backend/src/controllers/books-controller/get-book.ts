import { Request, Response } from "express";
import axios from "axios";

export const getBook = async (req: Request, res: Response) => {
  try {

      console.log("this is the getBook controller...");

        const {text} = req.body;
        if(!text){
            console.log("query text is needed");
            return
        };

        const query = text?.trim();
        // console.log("query:",query);

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    );
    // const response = await axios.get(
    //     `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    //       query
    //     )}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    //   );Use encodeURIComponent(query) to handle special characters (like spaces, &, ?, etc.)
    // console.log("response from googleBooksApi:",response)
    res.status(200).json({data:response.data})

  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("google book api error:", message);
  }

  //   res.send("get-book route");
};
