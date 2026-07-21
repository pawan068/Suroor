import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Library from '../../Pages/Library';
import Search from '../../Pages/Search';
import LikedSongs from '../../Pages/LikedSongs';
import Album from '../../Pages/Album';
import Artist from '../../Pages/Artist';
import Playlist from '../../Pages/Playlist';
import NotFound from '../../Pages/NotFound';
import Trending from '../../Pages/Trending/Trending';


const AppRoutes = () => {

  
  
  return (
    
    <Routes>

<Route path="/" element={< Home />} />
<Route path='/library' element = {< Library />} />
<Route path='/search' element = {< Search />} />
<Route path='/liked' element = {< LikedSongs />} />
<Route path='/album/:id' element = {< Album />} />
<Route path='/artist/:id' element = {< Artist />} />
<Route path='/playlist/:id' element = {< Playlist />} />
<Route path = "*" element={<NotFound />} />
<Route path="/trending" element={<Trending />} />



    </Routes  >
    
    
  )
}

export default AppRoutes
