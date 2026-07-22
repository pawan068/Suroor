import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const playSong = (song) => {
    console.log("SELECTED SONG:", song);
    setCurrentSong(song);
    setIsPlaying(true);
  };


  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };


  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};


export const usePlayer = () => useContext(PlayerContext);