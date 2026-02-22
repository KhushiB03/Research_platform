import authservice from "./auth/auth.service";
import { asyncHandler } from "../../src/utils/asyncHandler";

export const login = asyncHandler(async(req:any , res:any)=>{
    const {email  , password} = req.body;
    const data = await authservice.login(email , password);
    res.json(data);
});