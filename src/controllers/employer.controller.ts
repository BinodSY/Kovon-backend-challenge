import { createEmployerService } from "../services/ employer.service.js";
import type { Request, Response } from "express";

export const createEmployerController = async (
  req: Request,
  res: Response
) => {
  try {
    const employer = await createEmployerService(req.body);
    return res.status(201).json({
        message: "Employer created successfully",
        data: employer,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};