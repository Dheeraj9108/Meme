const jwt = require('jsonwebtoken');
const JWT_SECRET = "poo221jaaryshdee5673raj235648@gamilkumar"


const fetchuser=(req,res,next)=>{
    const auth_token = req.header('auth-token') ;
    if(!auth_token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const tokenData = jwt.verify(auth_token,JWT_SECRET); 
        req.user = tokenData.user;
        next();
           
    } catch (error) {
        res.status(401).send({error:"Please Authenticate using valid token"})
    }
}
module.exports = fetchuser