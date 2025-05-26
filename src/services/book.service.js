import { where } from "sequelize";
import db from "../config/db.js";
import { raw } from "express";

// Get all Books [R]
const getAllBooks = async () => {
  const data = await db.books.findAll();
  return data;
};

// Create Books
const addBook = async (data) => {
  const book = await db.books.create({ ...data });
  return book;
};

// Find book by ID
const findBookById = async (id) => {
  return await db.books.findByPk(id);
};

// Get all Genre
const getAllGenre = async () => {
  const genre= await db.books.findAll({
    attributes: ["genre"],
    group: ["genre"],
    raw: true,
  });
  return genre.map((g)=> g.genre);

};

// Find Books by Genere
const findBookByGenre = async (genreID) => {
  return await db.books.findAll({ where: { genre:genreID } });
};



// delete book
const deleteBook = async (id) => {
  return await db.books.destroy({ where: { id } });
};

// update books
const updateBook = async (data, id) => {
  return await db.books.update(data, { where: { id } });
};

export default {
  getAllBooks,
  addBook,
  findBookById,
  findBookByGenre,
  getAllGenre,
  deleteBook,
  updateBook,
};
