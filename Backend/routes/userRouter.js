const express=require("express")
const zod=require("zod")
const router=express.Router()

const signupBody=zod.object({
  username:zod.string().email(),
  firstName:zod.string(),
  lastName:zod.string(),
  password:zod.string().min(6)
})

module.exports=router