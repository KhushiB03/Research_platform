const {verifyToken} = require("../utils/jwt");
const authMiddleware = (req : any, res :any , next : any )=>{
    const header = req.headers.authorization ;
    if(!header.startswith("example ")){
        return res.status(401).json({
            message : "unauthorized"
        });

    }
    const token = header.split(" ")[1];
    try{
        const decoded = verifyToken(token);
        req.user = decoded;
        next();

    }catch(err){
        res.status(401).json({
            message :"invalid token"
        });
    }
};
module.exports = authMiddleware;