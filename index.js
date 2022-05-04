const sqlite3 = require("sqlite3");
const express = require("express");
const bodyParser = require("body-parser")
const db = require("./cars")
const app = express();

app.use(bodyParser.urlencoded( { extended: false}));
app.use(bodyParser.json());


app.listen(8000,() => console.log("server is running on port 8000"));

//endpoints
app.post("/cars", async (req,res) =>{
    const result = await db.createCar(req.body);
    res.status(201).json({ id: result[0] } );
});
app.get("/cars", async (req,res) => {
    const cars = await db.getAllCars();
    res.status(200).json({cars});
})
app.patch("/cars/:id", async (req,res) =>{
    const id = await db.updateCar(req.params.id, req.body);
    res.status(200).json({ id });
});
