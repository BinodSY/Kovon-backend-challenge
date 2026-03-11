import { Router } from "express";
import { createJobController } from "../controllers/job.controller.js";
import { validate } from "../middlewares/validate.js";
import { createJobSchema } from "../models/job.schema.js";
import { findJobsController } from "../controllers/job.controller.js";
const router = Router();

router.post(
  "/",
  validate(createJobSchema),
  createJobController
);

router.get("/jobList",findJobsController);

export default router;
