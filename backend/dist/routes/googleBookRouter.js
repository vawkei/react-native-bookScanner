"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_book_1 = require("../controllers/books-controller/get-book");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const save_book_to_db_1 = require("../controllers/books-controller/save-book-to-db");
const get_books_from_db_1 = require("../controllers/books-controller/get-books-from-db");
const googleBookApiRouter = (0, express_1.Router)();
googleBookApiRouter.post("/get-book", authMiddleware_1.default, get_book_1.getBook);
googleBookApiRouter.get("/get-books-from-db", authMiddleware_1.default, get_books_from_db_1.getBooksFromDb);
googleBookApiRouter.post("/save-book-to-db", authMiddleware_1.default, save_book_to_db_1.saveBookToDb);
exports.default = googleBookApiRouter;
