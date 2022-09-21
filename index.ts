import express from "express"
import { alreadyExist } from "./lib/general";
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.static('public'));

app.get("/pippo/:name",(req,res)=>{
    const {name}=req.params;
    //check if already exist
    if(alreadyExist(name,res,"/pippo"))
        return
    
})

app.listen(process.env.PORT!, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})