const express=require("express")

const app=express();
const posts=require("./users")

const rateLimit=require("express-rate-limit")

const limiter=rateLimit({
   max:10,
   windowMs:1 * 60 * 1000  //for 1minute
})


app.get("/users",limiter,(req,res)=>{
    res.send({
        status:"Success",
        posts:posts
    })
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})