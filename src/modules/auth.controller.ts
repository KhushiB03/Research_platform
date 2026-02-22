const authService = require("./auth/auth.service");
const {asyncHandler} = require("../utils/asyncHandler");

const register = asyncHandler(async(req:any , res:any)=>{
    const {email , password} = req.body;
    const data = await authService.register(email,password);
    res.status(201).json(data);

});
const login = asyncHandler(async(req:any , res:any)=>{
    const {email,password}  = req.body;
    const data = await authService.login(email,password);
    res.json(data);
});
module.exports ={register,login};