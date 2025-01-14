import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();
app.use(cors({
    origin:process.env.CORS,  // orgin means it till take requst from my set url
    Credential:true
}))
app.use(express.json({
    limit:"100kb"
}))
app.use(express.urlencoded({extended:true,limit:"100kb"})) 
// its work when we search something by url or when we want to pass some data by url then it will take object into object data 
app.use(express.static("public"))
app.use(cookieParser())


// defineing route and call from here 
import router from "./routes/user.route.js";
app.use("/api/v1",router)





export default app