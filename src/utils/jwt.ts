const jwt = require("jsonwebtoken");
const {env}  = require("../config/env");
const signToken = (payload: object)=>{
    return jwt.sign(payload , env.JWT_SECRET , {
        expireIn : env.JWT_EXPIRES_IN
    });
};
const verifyToken  = (token : String)=>{
    return jwt.verify(token , env.JWT_SECRET);
};
module.exports = {signToken , verifyToken};