import express from "express";
import cors from "cors";
import { Song, Album, Artist } from "@saavn-labs/sdk";

const app = express();

app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running 🚀"
  });
});


// Search Songs
app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query || "Arijit Singh";

    const songs = await Song.search({
      query,
      limit: 20
    });

    res.json(songs);

  } catch (error) {
    console.log("Song Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
});


// Popular Albums
app.get("/api/albums/", async (req, res) => {
  try {

    const albums = await Album.getTrending({
      language: "hindi"
    });

    res.json(albums);

  } catch (error) {

    console.log("Album Error:", error);

    res.status(500).json({
      error: error.message
    });

  }
});

app.get("/api/albums/:id", async (req, res) => {
  try {

    console.log("PARAM ID:", req.params.id);

    const album = await Album.getById({
      albumId: String(req.params.id)
    });

    res.json(album);

  } catch (error) {

    console.log("FULL ERROR:", error);

    res.status(500).json({
      error: error.message
    });

  }
});


// Top Artists
app.get("/api/artists", async (req, res) => {
  try {

    const artists = await Artist.search({
      query: "Hindi Bollywood",
      limit: 10
    });

    res.json(artists);

  } catch (error) {

    console.log("Artist Error:", error);

    res.status(500).json({
      error: error.message
    });

  }
});



app.get("/api/artists/:id",async (req, res) =>{
  try{

    const artist = await Artist.getById({
      artistId: req.params.id
    });
    res.json(artist);


  }
  catch(error){
    console.log("Artist Detail Error:", error);
    res.status(500).json({
      error: error.message
    });
  }
});


// Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});