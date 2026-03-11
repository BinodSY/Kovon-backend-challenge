import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import candidateRoutes from "./routes/candidate.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import adminRouter from "./routes/admin.routes.js";
import employerRoutes from "./routes/employer.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//http://localhost:3000/candidates
app.use("/candidates", candidateRoutes);

//http://localhost:3000/jobs
app.use("/jobs", jobRoutes);

//http://localhost:3000/applications  shortList:http://localhost:3000/applications/:id/shortlist
app.use("/applications", applicationRoutes);

//http://localhost:3000/employers
app.use("/employers", employerRoutes);

//http://localhost:3000/admin/verify-employer/:employerId
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

