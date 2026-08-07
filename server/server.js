import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAccessToken } from "./services/igdbService.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "OWL API Running 🦉",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});