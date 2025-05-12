import bookServices from "../services/bookServices.js";

// get all book
const getAllBooks = async (req, res)=>{
    try {
        const data = await bookServices.getAllBooks();
                res.json(data, {
            message: "Book Fetch Successfully"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export {getAllBooks, }