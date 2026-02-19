import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { createApplicationSchema } from "../models/application.schema.js";
import { createApplicationController } from "../controllers/application.controller.js";

const router = Router();

router.post(
  "/",
  validate(createApplicationSchema),
  createApplicationController
);

export default router;
