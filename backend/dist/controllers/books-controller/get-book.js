"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = void 0;
const axios_1 = __importDefault(require("axios"));
const getBook = async (req, res) => {
    try {
        console.log("this is the getBook controller...");
        const { text } = req.body;
        if (!text) {
            console.log("query text is needed");
            return;
        }
        ;
        const query = text?.trim();
        // console.log("query:",query);
        const response = await axios_1.default.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);
        res.status(200).json({ data: response.data });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "something went wrong";
        console.log("google book api error:", message);
    }
    //   res.send("get-book route");
};
exports.getBook = getBook;
