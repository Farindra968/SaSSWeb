import epxpress from "express";

const app = epxpress();


app.use("/", (req, res)=>{
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