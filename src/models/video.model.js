import { Schema,mongoose } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
    videfile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.types.ObjectId,
        ref:"user"
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
       default:0,
    },
    isPublished:{
        type:Boolean,
        required:true,
    }

},{
    timestamps:true
})

const videos=mongoose.model("video",videoSchema)
export default videos