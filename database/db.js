require("dotenv").config()
const knex = require("knex")({
    client : "mysql",
    connection : {
        database: process.env.DBS,
        host: process.env.HOST,
        user: process.env.User_db,
        password: process.env.PASSWORD
    }
})

knex.schema.createTable("users",(table)=>{
    table.increments("Id").primary()
    table.string("Name")
    table.integer("Age")
    table.string("E-mail")
}).then(data=>{
    console.log("tableCreated");
}).catch(err=>{
    console.log(err.message)
})



module.exports = knex