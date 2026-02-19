import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import candidateRoutes from "./routes/candidate.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/candidates", candidateRoutes);
app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

