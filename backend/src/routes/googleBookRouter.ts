import { Router } from "express";
import { getBook } from "../controllers/books-controller/get-book";
import authenticationMiddleware from "../middleware/authMiddleware";
import { saveBookToDb } from "../controllers/books-controller/save-book-to-db";
import {getBooksFromDb} from "../controllers/books-controller/get-books-from-db";


const googleBookApiRouter = Router();

googleBookApiRouter.post("/get-book", authenticationMiddleware, getBook);

googleBookApiRouter.get(
  "/get-books-from-db",
  authenticationMiddleware,
  getBooksFromDb
);
googleBookApiRouter.post(
  "/save-book-to-db",
  authenticationMiddleware,
  saveBookToDb
);

export default googleBookApiRouter;
