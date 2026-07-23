import { createContext, useContext, useEffect, useState } from "react";
import { searchSongs } from "../Services/songs";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeDuplicates = (songsList) => {
  const seen = new Set();

  return songsList.filter((song) => {
    const key = song?.title
      ?.toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

  const getSongs = async (query = "Trending Hindi") => {
    try {
      setLoading(true);

      const response = await searchSongs(query);

      const results = response?.results || [];

      const uniqueSongs = removeDuplicates(results);

      console.log("BEFORE:", results.length);
      console.log("AFTER:", uniqueSongs.length);

      setSongs(uniqueSongs);

    } catch (error) {
      console.error("Song Context Error:", error);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSongs("latest Hindi songs");
  }, []);

  return (
    <SongContext.Provider
      value={{
        songs,
        loading,
        getSongs,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export const useSongs = () => useContext(SongContext);