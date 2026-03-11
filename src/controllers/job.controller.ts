import type { Request, Response } from "express";
import { createJobService } from "../services/job.service.js";
import { findAllJobService } from "../services/job.service.js";
export const createJobController = async (
  req: Request,
  res: Response
) => {
  try {
    const job = await createJobService(req.body);
    return res.status(201).json({
        message: "Job created successfully",
        data: job,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export const findJobsController=async(
  req:Request,
  res:Response
)=>{
  try{
    const limit=Number(req.query.limit) || 10;
    const page=Number(req.query.page) || 1;
    const jobs=await findAllJobService(limit,page);

    return res.status(200).json({
      message:"all the jobs",
      data:jobs,
    })
  }catch(error){
    return res.status(500).json({
      message:"Internal Server Error",
      error:error instanceof Error? error.message:"Unkown Error",
    })
  }
}
