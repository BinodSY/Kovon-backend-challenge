import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validate=(schema:ZodType<any>)=>
(req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse(req.body);
        next();
    }catch(error:any){
        return res.status(400).json({
            message:"Validation failed",
            errors:error.errors,
        })
    }
};