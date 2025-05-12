import express from "express";
import { addBook, deleteBook, findBookById, getAllBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getAllBooks)
router.post('/', addBook)
router.get("/:id", findBookById)
router.delete("/:id", deleteBook)


export default router