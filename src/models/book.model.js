import { DataTypes } from "sequelize"

const bookModel = (sequelize)=> {
   const Book= sequelize.define("book", {
    bookName: {
        type: DataTypes.STRING, // type of field "string, number, etc"
        allowNull: false, // required: true
    },
    bookAuthor: {
        type: DataTypes.STRING,
        defaultValue: "Farindra" // if bookAuthor name is not given
    },
    bookPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookGenre: {
        type: DataTypes.STRING
    }
    })

    return Book
}

export default bookModel