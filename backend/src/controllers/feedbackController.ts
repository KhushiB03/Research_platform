import { success } from "zod";
import pool from "../config/db";
import { Request , Response } from "express";

const submitFeedback = async(req:Request , res:Response)=>{
    
    try {
        const { query , text , is_helpful} = req.body;
        await pool.query(
                `INSERT INTO feedback(query , text , is_helpful) values
                (?,?,?)`,[query , text , is_helpful]
        );
        res.json({
            success:true,
            message:"Feedback saved"
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "failed"
        });
        
    }

};
export default submitFeedback;