import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { createApplicationSchema } from "../models/application.schema.js";
import { createApplicationController,getApplicationsController,listApplicationsController,shortlistApplicationController } from "../controllers/application.controller.js";


const router = Router();

router.post(
  "/",
  validate(createApplicationSchema),
  createApplicationController
);

router.get("/", listApplicationsController);
router.get("/filters", getApplicationsController);


router.patch("/:id/shortlist", shortlistApplicationController);


export default router;
