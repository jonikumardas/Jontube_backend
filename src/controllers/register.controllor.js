import asyncHendeler from "../utils/asyncHendeler.js"

const register = asyncHendeler(async(req,res)=>{
    res.status(200).json({
        success:true,
        message:"registation successfull"
    })

})
export {register}