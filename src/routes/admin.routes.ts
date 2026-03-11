import {Router} from "express";
import { verifyEmployerController } from "../controllers/admin.controller.js";
const adminRouter = Router();

adminRouter.patch("/verify-employer/:employerId", verifyEmployerController);


export default adminRouter;