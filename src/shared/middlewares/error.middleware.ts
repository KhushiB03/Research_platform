import {Request,Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const globalErrorHandler =(
    err:any,
    req:Request,
    res:Response,
    next: NextFunction,

)=>{
    if( err instanceof AppError){
        //if operational error
        return res.status(err.statusCode).json({
            success: false,
            message : err.message,
        });
    }
    console.error(err);
    //for programming error
    return res.status(500).json({
        success: false,
        message: "internal server error",
    });
};