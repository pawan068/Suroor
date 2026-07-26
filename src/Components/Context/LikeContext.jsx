import { createContext, useContext, useEffect, useState } from "react";

export const LikeContext = createContext();


export const LikeProvider = ({ children }) => {

  const [likedSongs, setLikedSongs] = useState(() => {

    const data = localStorage.getItem("likedSongs");

    return data ? JSON.parse(data) : [];

  });



  useEffect(() => {

    localStorage.setItem(
      "likedSongs",
      JSON.stringify(likedSongs)
    );

  }, [likedSongs]);



  const toggleLike = (song) => {

    setLikedSongs((prev)=>{

      const exists = prev.some(
        item => item.id === song.id
      );


      if(exists){

        return prev.filter(
          item => item.id !== song.id
        );

      }


      return [
        ...prev,
        song
      ];

    });

  };



  const isLiked = (id) => {

    return likedSongs.some(
      song => song.id === id
    );

  };


  return (

    <LikeContext.Provider
      value={{
        likedSongs,
        toggleLike,
        isLiked
      }}
    >

      {children}

    </LikeContext.Provider>

  );

};



export const useLike = () => useContext(LikeContext);