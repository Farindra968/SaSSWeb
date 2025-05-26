import express from "express";
import { addBook, deleteBook, findBookByGenre, findBookById, getAllBooks, getAllGenre, updateBook } from "../controller/book.controller.js";

const router = express.Router();

// auth/book [get all book]
router.route("/").get(getAllBooks).post(addBook)

// /auth/book/genre [get all genre]
router.route("/genre").get(getAllGenre)

// /auth/book/:id
router.route("/:id").get(findBookById).delete(deleteBook).patch(updateBook)

// /auth/book/genre/:genreID
router.route("/genre/:genreID").get(findBookByGenre)

export default router