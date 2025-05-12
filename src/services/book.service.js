import db from "../config/db.js";

// Get all Books [R]
const getAllBooks = async () => {
  const data = await db.books.findAll();
  return data;
};

// Create Books
const addBook = async (data)=> {
    const book = await db.books.create({...data});
    return book;
}

// Find book by ID 
const findBookById = async (id)=> {
    return await db.books.findByPk(id);
}

// delete book
const deleteBook = async (id)=> {
    return await db.books.destroy({where:{id}})

}

export default { getAllBooks, addBook, findBookById, deleteBook };
