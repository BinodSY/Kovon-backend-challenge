import { Router } from "express";
import { createCandidateController } from "../controllers/candidate.controller.js";
import { validate } from "../middlewares/validate.js";
import { createCandidateSchema } from "../models/candidate.schema.js";

const router=Router();

router.post(
    "/",
    validate(createCandidateSchema),
    createCandidateController
);

export default router;