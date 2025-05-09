// Importing the dotenv configuration function
import { configDotenv } from "dotenv";

// Loads environment variables from a .env file into process.env
configDotenv();

// Creating a config object to store app-level configuration variables
const appConfig = {
    databaseURL: process.env.DATABASE_URL // Accessing the DATABASE_URL from environment variables
};

// Exporting the config object so it can be used in other parts of the application
export default appConfig;
