import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import Library from "../../Pages/Library";
import Search from "../../Pages/Search";
import LikedSongs from "../../Pages/LikedSongs";
import Album from "../../Pages/Album";
import Artist from "../../Pages/Artist";
import Playlist from "../../Pages/Playlist";

import NotFound from "../../Pages/NotFound";
import Trending from "../../Pages/Trending/Trending";
import PlaylistDetails from './../../Pages/Trending/PlaylistDetails';
import PlaylistBanner from "../../Pages/HomeCompo/PlaylistBanner";
import RecentlyPlayer from "../../Pages/recent/RecentlyPlayer";
import FollowedArtists from "../../Pages/Following/FollowedArtist";


const AppRoutes = () => {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      

      <Route path="/library" element={<Library />} />

      <Route path="/search" element={<Search />} />

      <Route path="/LikedSongs" element={<LikedSongs />} />

      <Route path="/album/:id" element={<Album />} />

      <Route path="/artist/:id" element={<Artist />} />

      {/* User Playlists */}
      <Route path="/playlist" element={<Playlist />} />

      {/* Single Playlist Songs */}
      <Route path="/playlist/:id" element={<PlaylistDetails />} />

      <Route path="/trending" element={<Trending />} />

      <Route path ="/followed-artists" element={<FollowedArtists/>}/>

      <Route path="/recently-played" element={<RecentlyPlayer />} />
      

      <Route path="/playlist-banner" element={<PlaylistBanner />} />

      <Route path="*" element={<NotFound />} />

    </Routes>

  );
};

export default AppRoutes;