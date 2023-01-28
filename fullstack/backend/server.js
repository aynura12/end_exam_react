const express = require("express");
const cors = require("cors");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const dotenv = require("dotenv");

dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())

const {Schema}=mongoose
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})

Users=mongoose.model("flover",userSchema)

app.get("/flover",(req,res)=>{
    Users.find({},(docs,err)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({messaje:err})
        }
    })
})

app.post("/flover",(req,res)=>{
   let user=new Users({
    name:req.body.name,
    age:req.body.age
   })
   user.save()
   res.send("succes")
})
app.get("/flover/:id",(req,res)=>{
    const {id}=req.params
   
    Users.findById(id,(docs,err)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({messaje:err})
        }
    })
})
app.delete("/flover/:id",(req,res)=>{
    const {id}=req.params
   
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("delete ok")
        }else{
            res.status(500).json({messaje:err})
        }
    })
})


PORT=process.env.PORT
PASSWORD=process.env.PASSWORD
DB=process.env.DB.replace("<password>",PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
    console.log("db connect");}
app.listen(PORT,()=>{
    console.log(`port is ${PORT}`); 
})
})