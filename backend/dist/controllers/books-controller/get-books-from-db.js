"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksFromDb = void 0;
const Book_1 = __importDefault(require("../../model/Book"));
8;
const getBooksFromDb = async (req, res) => {
    const userId = req.user?.userId;
    try {
        const books = await Book_1.default.find({ createdBy: userId }).sort("-createdAt");
        res.status(200).json({ books: books, nbhits: books.length });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "something went wrong";
        console.log("google book api error:", message);
    }
    // console.log("this is getBooksFromDb route")
};
exports.getBooksFromDb = getBooksFromDb;
