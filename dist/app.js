import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running on ${PORT}`);
});
//# sourceMappingURL=app.js.map