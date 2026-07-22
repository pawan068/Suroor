import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { PlayerProvider } from "./Components/Context/PlayerContext";
import { SongProvider } from "./Components/Context/SongContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter basename="/Suroor">

     

        <PlayerProvider>
          
            <SongProvider>
          <App />
            </SongProvider>

        </PlayerProvider>

    

    </BrowserRouter>

  </React.StrictMode>
);