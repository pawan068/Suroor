import express from "express";
import cors from "cors";
import { Song } from "@saavn-labs/sdk";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    message: "Backend is running 🚀"
  });
});


app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query || "Arijit Singh";

    const songs = await Song.search({
      query,
      limit: 20
    });

    res.json(songs);

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      error: error.message
    });
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});