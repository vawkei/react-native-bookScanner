"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveBookToDb = void 0;
const Book_1 = __importDefault(require("../../model/Book"));
const saveBookToDb = async (req, res) => {
    const { books } = req.body;
    console.log("books from GoogleAPI:", books);
    if (!books || books.length === 0) {
        console.log("no books received from CameraScreen");
        res.status(400).json({ msg: "no books received from CameraScreen" });
        return;
    }
    try {
        const formattedBooks = books.map((book) => ({
            title: book.volumeInfo.title || "Unknown Title",
            imageLinks: {
                thumbnail: book.volumeInfo.imageLinks?.thumbnail || "",
                smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail || "",
            },
            author: book.volumeInfo.authors || [],
            description: book.volumeInfo.description || "No description available",
            genre: book.volumeInfo.categories?.[0] || "Unknown Genre",
            publishedDate: book.volumeInfo.publishedDate || "Unknown Date",
            createdBy: req.user?.userId
        }));
        const savedBooks = await Book_1.default.insertMany(formattedBooks);
        res.status(200).json({ msg: "Books stored successfully", savedBooks });
    }
    catch (error) {
        console.error("Error saving books:", error);
        res.status(500).json({ msg: "Failed to save books", error });
    }
    console.log("saveBookToDb route");
};
exports.saveBookToDb = saveBookToDb;
