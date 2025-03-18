var jwt =require("jsonwebtoken");
const JWT_SECRET ="hellotest1@";

const fetchuser =(req,res,next) =>{ 
    const token = req.header("auth-token");
    if(!token){
       return res.status(401).send({error: "Please authenticate using a vlid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({error: "Please authenticate using a vlid token"})
    }
}

module.exports= fetchuser;