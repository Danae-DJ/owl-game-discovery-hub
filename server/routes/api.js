import express from "express";
import {
    getGames,
    getGameById,
} from "../services/igdbService.js";

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

router.get("/games/:id", async (req, res) => {
    try {
        const game = await getGameById(req.params.id);

        if (!game) {
            return res.status(404).json({
                success: false,
                message: "Game not found.",
            });
        }

        res.json(game);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to load game details.",
        });
    }
});

export default router;