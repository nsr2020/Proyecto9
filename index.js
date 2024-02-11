require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./src/config/db")
const pelisRouter = require("./src/api/routes/pelis")



const app = express()

connectDB()

app.use(cors())

app.use("/api/v1/pelis", pelisRouter)

app.use("*", (req, res, next)=>{
   return res.status(404).json("Route not found")
})

app.listen(3000, () =>{
    console.log("http://localhost:3000");
})

