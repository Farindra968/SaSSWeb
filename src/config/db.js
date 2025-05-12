// Importing Sequelize class from the 'sequelize' library
import { DataTypes, Sequelize } from "sequelize";
import bookModel from "../models/book.model.js";
import userModel from "../models/user.model.js";

// Creating a Sequelize instance to connect with Supabase PostgreSQL database
/// Supabase Postgress DB connection [ORM]
const sequelize = new Sequelize(
  "postgresql://postgres.bamqqfdwtmgwtbeooivc:DbFullStack!@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

// Attempting to authenticate the database connection
sequelize.authenticate().then(() => {
    // Logs a success message if the DB is connected properly
    console.log("DB Connected successfully");
}).catch((error) => {
    // Logs an error message if DB connection fails
    console.log(`DB not connect sucessfully ${error}`);
});

// Creating an empty object to store the sequelize instance and class
const db = {};

// Assigning the sequelize instance to the db object
db.sequelize = sequelize;

// Assigning the Sequelize class itself to the db object
db.Sequelize = Sequelize;

// connecting model
db.books = bookModel(sequelize);
db.users = userModel(sequelize);

/// migration
sequelize.sync({ alter: false}).then(()=>{
  console.log("Migrate Successfully vayo ")
}).catch((error)=>{
  console.log(`Migrate vaya na guz !!! ${error}`)
})

// Exporting the db object for use in other parts of the application
export default db
