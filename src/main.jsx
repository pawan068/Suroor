import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";


import { PlayerProvider } from "./Components/Context/PlayerContext";
import { SongProvider } from "./Components/Context/SongContext";
import { PlaylistProvider } from "./Components/Context/PlayListContext";
import { LikeProvider } from "./Components/Context/LikeContext";
import { RecentlyPlayedProvider } from './Components/Context/RecentlyPlayedContext';
import { ArtistFollowProvider } from "./Pages/HomeCompo/ArtistFollowing";
import { AuthProvider } from "./Components/Context/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter basename="/Suroor">

<SongProvider>

  <AuthProvider >

      <LikeProvider>


       < RecentlyPlayedProvider>

        <PlayerProvider>
<ArtistFollowProvider>
          <PlaylistProvider>

            <App />

          </PlaylistProvider>
  </ArtistFollowProvider>

        </PlayerProvider>

         </RecentlyPlayedProvider>

      </LikeProvider>

      </AuthProvider>

</SongProvider>

    </BrowserRouter>

  </React.StrictMode>
);