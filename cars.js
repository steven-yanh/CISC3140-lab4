const knex = require("./knex");

function createCar(car){
    return knex("cars").insert(car);
};
function getAllCars(){
    return knex("cars").select("*");
}
function deleteCar(id){
    return knex("cars").where("Car_ID",id).del();
}
function updateCar(id,car){
    return knex("cars").where("Car_ID",id).update(car)
}
function getInfo(id){
    return knex("cars").select("Car_ID").select("Email").select("Name").where("Car_ID",id)
}
module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updateCar,
    getInfo
}
