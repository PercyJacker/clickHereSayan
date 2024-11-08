import  Express  from "express";
import axios from "axios";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/route.js"
import cors from "cors";


const app=Express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const PORT=process.env.PORT || 3000;
const URL = process.env.MONGO_URI



mongoose.connect(URL).then(()=>{
    console.log("DB connected");
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
    })
}).catch(err=>console.log(err))

app.use("/api",route)

