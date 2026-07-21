import { createContext, useContext, useState } from "react";

import { searchSongs } from "../Services/songs";

const SongContext = createContext();


export const SongProvider = ({ children }) => {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);


  const getSongs = async (query) => {

    try {

      setLoading(true);

      const response = await searchSongs(query);

      const songList = response?.data?.results || [];

      setSongs(songList);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


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