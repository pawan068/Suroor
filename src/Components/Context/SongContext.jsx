import { createContext, useContext, useEffect, useState } from "react";
import { searchSongs } from "../Services/songs";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSongs = async (query = "Trending Hindi") => {
    try {
      setLoading(true);

      const response = await searchSongs(query);

      console.log("FULL API RESPONSE:", response);

      setSongs(response?.results || []);

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