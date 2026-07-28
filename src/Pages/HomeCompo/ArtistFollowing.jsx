import { createContext, useContext, useEffect, useState } from "react";


const ArtistFollowContext = createContext();



export const ArtistFollowProvider = ({ children }) => {


  const [followedArtists, setFollowedArtists] = useState(() => {

    const data = localStorage.getItem("followedArtists");

    return data ? JSON.parse(data) : [];

  });



  useEffect(() => {

    localStorage.setItem(
      "followedArtists",
      JSON.stringify(followedArtists)
    );

  }, [followedArtists]);




  const toggleFollowArtist = (artist) => {

    if (!artist) return;


    setFollowedArtists((prev) => {


      const exists = prev.some(
        (item) => item.id === artist.id
      );


      if (exists) {

        return prev.filter(
          (item) => item.id !== artist.id
        );

      }


      return [
        ...prev,
        artist
      ];


    });

  };




  const isFollowed = (id) => {

    return followedArtists.some(
      (artist) => artist.id === id
    );

  };




  return (

    <ArtistFollowContext.Provider

      value={{
        followedArtists,
        toggleFollowArtist,
        isFollowed
      }}

    >

      {children}

    </ArtistFollowContext.Provider>

  );

};




export const useArtistFollow = () =>
  useContext(ArtistFollowContext);