import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { createApplicationSchema } from "../models/application.schema.js";
import { createApplicationController,listApplicationsController } from "../controllers/application.controller.js";

const router = Router();

router.post(
  "/",
  validate(createApplicationSchema),
  createApplicationController
);

router.get("/", listApplicationsController);

export default router;
