import mongoose from "mongoose";
import { Database } from "../constent.js";
// connection database in here and imported it on src/index.js
const connectDB=async()=>{
    try {
        const connnectInstance=await mongoose.connect(`${process.env.DB_CONNECTION}/${Database}`)
        // console.log("task to show ",connnectInstance.connection.host)
        console.log(`database conncetion is successfull,${connnectInstance.connection.host}`)
        
    } catch (error) {
        console.log(`mongodb connection error`,error);
        process.exit(1)
        
    }
}
export default connectDB