const express=require("express")
const mainRouter=require("./routes/index")
const cors=require("cors")
const app=express()

app.use(cors())

app.use(express.json())


app.user("/api/v1",mainRouter)