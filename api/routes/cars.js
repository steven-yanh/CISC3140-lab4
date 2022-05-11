const knex = require("./knex");

function createCar(car){
    return knex("lab5cars").insert(car);
};
function getAllCars(){
    return knex("lab5cars").select("*");
}
function deleteCar(id){
    return knex("lab5cars").where("carid",id).del();
}
function updateCar(id,car){
    return knex("lab5cars").where("carid",id).update(car)
}
function getInfo(id){
    return knex("lab5cars").select("carid").select("fname").select("lname").select("year").select("score").where("carid",id)
}
module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updateCar,
    getInfo
}
