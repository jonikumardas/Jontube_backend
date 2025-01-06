
const asyncHendeler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};



















/*
there are two typs promis and try catch
const asyncHendeler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (err) {
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
        
    }

}
const asyncHendeler=(requsrtHendler)=>{
    (req,res,next)=>{
        Promise.resolve(requsrtHendler(req,res,next)).catch((err)=>next(err))
    }

}
const asyncHendeler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code||500).json({
            success:false,
            message:error.message
        })
        
    }

}








const asyncHendeler = (requsrtHendler) => {
  (req, res, next) => {
    Promise.resolve(requsrtHendler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
export { asyncHendeler };



summary: higher order function recive a function as a paramiter and return its valuer as a paramiter 
const higherOrderFunction=(fan)=> {
    async()=>{

    }

    

}
    *** we can make its more easy like this ***
const higherOrderFun=(fun)=>async()=>{};

*/
