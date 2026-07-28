import { createContext, useContext, useEffect, useState } from "react";

const RecentlyPlayedContext = createContext();


export const RecentlyPlayedProvider = ({ children }) => {

  const [recentSongs, setRecentSongs] = useState(() => {

    const data = localStorage.getItem("recentSongs");

    return data ? JSON.parse(data) : [];

  });

  const clearRecent = ()=>{
    setRecentSongs([]);
    localStorage.removeItem("recentSongs")

  }


  useEffect(() => {

    localStorage.setItem(
      "recentSongs",
      JSON.stringify(recentSongs)
    );

  }, [recentSongs]);




const addRecentSong = (song) => {

  if (!song) return;

  setRecentSongs((prev) => {

    let updatedSongs = [
      song,
      ...prev
    ];


    if (updatedSongs.length > 30) {
      updatedSongs.pop(); 
    }


    return updatedSongs;

  });

};




  return (

    <RecentlyPlayedContext.Provider
      value={{
        recentSongs,
        addRecentSong,
        clearRecent
      }}
    >

      {children}

    </RecentlyPlayedContext.Provider>

  );

};




export const useRecent = () => 
  useContext(RecentlyPlayedContext);