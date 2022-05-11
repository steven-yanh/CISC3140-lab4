var sqlite3 = require("sqlite3");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser")
var db = require("./cars")
var app = express();

app.use(bodyParser.urlencoded( { extended: false}));
app.use(bodyParser.json());


app.listen(8000,() => console.log("server is running on port 8000"));

//endpoints
app.post("/cars", async (req,res) =>{
    const result = await db.createCar(req.body);
    res.status(201).json({ Car_ID: result[0] } );
});
app.get("/cars", async (req,res) => {
    const cars = await db.getAllCars();
    res.status(200).json({cars});
})
app.get("/cars/:id", async (req,res) => {
    const car = await db.getInfo(req.params.id)
    res.status(200).json({ car });
})
app.patch("/cars/:id", async (req,res) =>{
    const id = await db.updateCar(req.params.id, req.body);
    res.status(200).json({ id });
});
app.delete("/cars/:id", async (req,res) =>{
    await db.deleteCar(req.params.id);
    res.status(200).json({ success: true});
});
module.exports = router;