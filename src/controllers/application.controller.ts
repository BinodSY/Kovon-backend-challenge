import type { Request, Response } from "express";
import { createApplicationService } from "../services/application.service.js";

export const createApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { candidateId, jobId } = req.body;

    const application = await createApplicationService(
      candidateId,
      jobId
    );

    return res.status(201).json({
        message: "Application created successfully",
        data: application,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};