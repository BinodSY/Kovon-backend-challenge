import type { Request, Response } from "express";
import { createApplicationService,listApplicationsByJobService,shortlistApplicationService } from "../services/application.service.js";

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


export const listApplicationsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { jobId } = req.query;

    if (!jobId || typeof jobId !== "string") {
      return res.status(400).json({
        message: "jobId query parameter is required",
      });
    }

    const applications = await listApplicationsByJobService(jobId);

    return res.status(200).json(applications);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error:error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export const shortlistApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({
        message: "id query parameter is required",
      });
    }

    const response =
      await shortlistApplicationService(id);

    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
