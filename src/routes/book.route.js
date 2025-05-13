import express from "express";
import { addBook, deleteBook, findBookById, getAllBooks, updateBook } from "../controller/book.controller.js";

const router = express.Router();

router.route("/").get(getAllBooks).post(addBook)
router.route("/:id").get(findBookById).delete(deleteBook).patch(updateBook)


export default router