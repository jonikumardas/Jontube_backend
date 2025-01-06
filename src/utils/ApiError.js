/* node by defualt provide its error items by class 
that will be re usable and i can access it from anther file 
Main Note :The purpose of using coustom err hendeler class to solve the problem is all err will catch with this format */
class ApiError extends Error{
  constructor(
    statusCode,
    message="somthings want wrong!!",
    stack="",
    errors=[]
  ){
    super(message),
    this.statusCode=statusCode;
    this.data=null;
    this.erros=errors
    this.success=false
    //if the error stack available then it provides full stack trace 
    if(stack){
      this.stack=stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }

  }

}
export{ ApiError}