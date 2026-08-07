import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAccessToken } from "./services/igdbService.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// Use the API routes verified
/*
app.get("/", async (req, res) => {
  try {
    const token = await getAccessToken();

    res.json({
      success: true,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

*/

// Use the API routes 2
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