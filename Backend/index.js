const express=require("express")
const mainRouter=require("./routes/index")
const app=express()

app.user("/api/v1",mainRouter)