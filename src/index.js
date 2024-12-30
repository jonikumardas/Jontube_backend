import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:"./env" // .env used for to configer all file can take from .env folder 
})
connectDB()