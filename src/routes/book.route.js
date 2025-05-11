import express from "express";
import { getAllBooks } from "../controller/book.controller";

const router = express.Router();

router.get("/", getAllBooks)


export default router