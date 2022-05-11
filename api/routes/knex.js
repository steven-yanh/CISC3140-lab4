const knex = require("knex");
const ConnectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "./routes/data.sqlite3"
    }
})

module.exports = ConnectedKnex;