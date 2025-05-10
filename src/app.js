import epxpress, { json } from "express";
import db from "./config/db.js"
const app = epxpress();


app.use(epxpress.json())

app.get("/", (req, res)=>{
    res.json({
        "name": "SaSS Web Development",
        "port": 5000,
        "status": "Good",
        "Author": "Farindra"
    })
})

app.listen(5000,()=>{
    console.log("Server Running Sucessfully")
})