import { Response,Request } from "express";
import { getAnswer } from "../services/ragService";
import { success } from "zod";

export const askQuestion=async(req:Request , res:Response)=>{
    try{
        const {query}=req.body;
        const answer = await getAnswer(query);
        res.json({
            success:true,
            answer
        });
        if(!answer){
            return res.json({
                success:true,
                message:"no relevant information found"
            })
        }
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:"failed to get answer"
        });
    }
};