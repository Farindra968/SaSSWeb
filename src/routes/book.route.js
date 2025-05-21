import express from "express";
import { addBook, deleteBook, findBookByGenre, findBookById, getAllBooks, getAllGenre, updateBook } from "../controller/book.controller.js";

const router = express.Router();

router.route("/").get(getAllBooks).post(addBook)
router.route("/:id").get(findBookById).delete(deleteBook).patch(updateBook)
router.route("/genre").get(getAllGenre)
router.route("/genre/:genreID").get(findBookByGenre)


export default router