import epxpress, { json } from "express";
import db from "./config/db.js"
import bookRoute from "./routes/book.route.js"
import cors from "cors"
const app = epxpress();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // Allow cookies if needed
}));
app.use(epxpress.json())

app.get("/", (req, res)=>{
    res.json({
        "name": "SaSS Web Development",
        "port": 5000,
        "status": "Good",
        "Author": "Farindra"
    })
})


// 
app.use("/book", bookRoute)

app.listen(5000,()=>{
    console.log("Server Running Sucessfully")
})