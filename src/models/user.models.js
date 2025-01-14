import { Schema, mongoose } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true, // it will help me to search somthings
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avater: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: [true,"password is required"]
    },
    refreshToken: {
      type: String,
      
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(mongooseAggregatePaginate);
userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    return next()
  }
  this.password= await bcrypt.hash(this.password,10)
  next()
});
// we can access all the method from schema objects by this keyword
userSchema.methods.isCorrectPassword=async function (password) {
  return await bcrypt.compare(password,this.password)
  
}
// to create authantic user by access token 
userSchema.methods.genarateAccessToken= function(){
 return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullName: this.userName,
    },
    process.env.ACCESS_SECRECT_TOKEN,
    {expiresIn:"1h"}
    
  );

}
// genarte refresh token 

userSchema.methods.genarateRefreshToken=function (){
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_SECERT_TOKEN,
    { expiresIn: "10d" }
  );
 


}
// if we want to acces
const user=mongoose.model("user",userSchema)
export default user