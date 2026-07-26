import { Trash } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(() => {
    const data = localStorage.getItem("playlists");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const createPlaylist = (name) => {
    if (!name.trim()) return;

    const newPlaylist = {
      id: Date.now(),
      name,
      songs: [],
    };

    setPlaylists((prev) => [...prev, newPlaylist]);
  };

  const deletePlaylist = (id) => {
    setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id));
  };

  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id !== playlistId) return playlist;

        const exists = playlist.songs.some((item) => item.id === song.id);

        if (exists) return playlist;

        return {
          ...playlist,
          songs: [...playlist.songs, song],
        };
      })
    );
  };

 const removeSongFromPlaylist = (playlistId, songId) => {

  setPlaylists((prev) =>
    prev.map((playlist) => {
      if (playlist.id !== playlistId) return playlist;

      return {
        ...playlist,
        songs: playlist.songs.filter((song) => song.id !== songId),
      };
    })
  );

};

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        createPlaylist,
        deletePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);