import type { Request, Response } from "express";
import { verifyEmployer } from "../services/admin.service.js";

export const verifyEmployerController = async (
  req: Request,
  res: Response
) => {
  try {
    const { employerId } = req.params;
    if (!employerId || typeof employerId !== "string") {
      return res.status(400).json({
        message: "Employer ID is required",
      });
    }
    const employer = await verifyEmployer(employerId);

    res.status(200).json({
      message: "Employer verified successfully",
      data: employer
    });

  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};