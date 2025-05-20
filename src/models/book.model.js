import { DataTypes } from "sequelize"

const bookModel = (sequelize)=> {
   const Book= sequelize.define("book", {
    name: {
        type: DataTypes.STRING, // type of field "string, number, etc"
        allowNull: false, // required: true
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: "Farindra" // if bookAuthor name is not given
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
    })

    return Book
}

export default bookModel