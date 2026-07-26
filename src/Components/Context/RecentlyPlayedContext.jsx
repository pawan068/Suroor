import { createContext, useContext, useEffect, useState } from "react";

const RecentlyPlayedContext = createContext();


export const RecentlyPlayedProvider = ({ children }) => {

  const [recentSongs, setRecentSongs] = useState(() => {

    const data = localStorage.getItem("recentSongs");

    return data ? JSON.parse(data) : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "recentSongs",
      JSON.stringify(recentSongs)
    );

  }, [recentSongs]);



  const addRecentSong = (song) => {

    if (!song) return;


    setRecentSongs((prev) => {

      const filtered = prev.filter(
        item => item.id !== song.id
      );


      return [
        song,
        ...filtered
      ].slice(0, 50);

    });

  };


  return (

    <RecentlyPlayedContext.Provider
      value={{
        recentSongs,
        addRecentSong
      }}
    >

      {children}

    </RecentlyPlayedContext.Provider>

  );

};



export const useRecent = () => 
  useContext(RecentlyPlayedContext);