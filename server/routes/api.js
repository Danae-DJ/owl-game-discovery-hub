import express from "express";
import { getGames } from "../services/igdbService.js";

const router = express.Router();

router.get("/games", async (req, res) => {
  try {
    const games = await getGames();

    res.json(games);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});

export default router;