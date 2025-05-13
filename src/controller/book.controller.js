import bookServices from "../services/book.service.js";

// get all book
const getAllBooks = async (req, res) => {
  try {
    const data = await bookServices.getAllBooks();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// create Books
const addBook = async (req, res)=> {
    const {bookName, bookPrice}= req.body
    try {
        /// validation 
        if(!bookName) return res.status(400).send("Book Name is Required")
        if(!bookPrice) return res.status(400).send("Book Price is Required")

        const data =await bookServices.addBook(req.body)
        res.json(data)
    } catch (error) {
        res.status(500).send(error.message)}
}

// Get single book by ID
const findBookById = async (req, res)=> {
    const {id} = req.params
    try {
        const book = await bookServices.findBookById(id)
        // if book not found
        if(!book) {return res.status(404).send("Book not foundf")}
        res.json(book)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// delete book
const deleteBook = async (req, res)=> {
    const {id}= req.params
    try {
        const book = await bookServices.deleteBook(id);
        // if book not found
        if(!book) {return res.status(404).send("Book not found")}
        res.send("Book deleted Successfully")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// update book
const updateBook  = async (req, res)=> {
    const {id}= req.params
    try {
        const book = await bookServices.updateBook(req.body, id)
        /// if book not found
        if(!book) {return res.status(404).send("Book not found")}
        res.json(book)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export { getAllBooks, addBook, findBookById, deleteBook, updateBook };
