import { Response,Request } from "express";
import { getAnswer } from "../services/ragService";

export const askQuestion=async(req:Request , res:Response)=>{
    try{
        const {query}=req.body;
        const answer = await getAnswer(query);
        res.json({
            success:true,
            answer
        });
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:"failed to get answer"
        });
    }
};