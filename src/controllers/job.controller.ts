import type { Request, Response } from "express";
import { createJobService } from "../services/job.service.js";

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
    });
  }
};
