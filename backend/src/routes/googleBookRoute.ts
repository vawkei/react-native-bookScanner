import { Router } from "express";
import { getBook } from "../controller/get-book";

const googleBookApiRouter = Router();

googleBookApiRouter.post("/get-book",getBook);

export default googleBookApiRouter;