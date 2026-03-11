import {createEmployerController} from "../controllers/employer.controller.js";
import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import createEmployerSchema from "../models/employer.schema.js";

const router = Router();

router.post(
  "/",
  validate(createEmployerSchema),
  createEmployerController
);

export default router;