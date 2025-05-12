import books from "../config/db.js"
const getAllBooks = async()=>{
    try {
        const data = await books.findAll();
        return;

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default {getAllBooks, };