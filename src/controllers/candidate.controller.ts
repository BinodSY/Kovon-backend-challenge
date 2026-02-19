import type { Request,Response } from "express";

import { createCandidateService } from "../services/candidate.service.js";

export const createCandidateController=async(
    req:Request,
    res:Response
)=>{
    try{
        const candidate=await createCandidateService(req.body);
        return res.status(201).json({
            message:"Candidate created successfully",
            data:candidate,
        });
    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
            error:error instanceof Error ? error.message : "Unknown error"
        })
    }
}