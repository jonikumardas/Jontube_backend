import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import { port } from "./constent.js";
dotenv.config({
    path:"./env" // .env used for to configer all file can take from .env folder 
})

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Listining to port at:${port}`)
        process.exit(1)
    })

})
.catch((error)=>{
    console.log(error)
});
