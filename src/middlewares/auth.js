const jwt =require("jsonwebtoken")

module.exports=(req,res,next)=>{
    const token =req.header("x-auth-toke")
    if(!token){
        return resizeBy.status(401).json({ message : "permiso no valido "})
    }
    try{
const passVerifiedToken=jwt.verify(token,process.env.SECRET)
req.user=passVerifiedToken.user

next()
    }catch(err){
        resizeBy.json({message:"hubo un erro", descripcion:err})
    }
}