const express = require("express")
const knex = require("./database/db")
require("dotenv").config()
const app = express()
const port = process.env.PORT




app.use(express.json())

//   /////////////     

app.get("/", (req,res)=>{
    res.send("Hello from the server")

})
// ////////////////


// /////  insert ///////


app.post("/insert",(req,res)=>{
    knex("users").insert(req.body)
    .then(data=>{
        res.send("data inserted successfully")
    }).catch(err=>{
        res.send("eeror occured")
        console.log(err.message)
    })
})


// ////// read  //////


app.get("/read",(req,res)=>{
    knex("users").then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send("eeror occured")
        console.log(err.message)
    })
})


////////  update  //////

app.put("/update/:id",(req,res)=>{
    knex("users").where({Id:req.params.id}).update(req.body)
    .then(data=>{
        res.send("data updated")
    }).catch(err=>{
        res.send("eeror occured")
        console.log(err.message)
    })
})



// ////////// delete  


app.delete("/delete/:id",(req,res)=>{
    knex("users").where({Id:req.params.id}).del()
    .then((data)=>{
        res.send("data deleted")
    }).catch((err)=>{
        res.send("eeror occured")
        console.log(err.message)
    })
})




app.listen(port,()=>{
    console.log("server is running on port",port);
})