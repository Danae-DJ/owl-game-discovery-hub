import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
//import { getAccessToken } from "./services/igdbService.js"; //Important note: We no longer need to import `getAccessToken` directly in `server.js`.`api.js` → `igdbService.js` handles communication with IGDB.
import apiRoutes from "./routes/api.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const distPath = path.join(__dirname, "../dist");

app.use(express.static(distPath));

/*//testing the server
app.get("/", (req, res) => {
  res.json({
    message: "OWL API Running 🦉",
  });
});
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});