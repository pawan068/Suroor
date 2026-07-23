import React from "react";
import AppRoutes from "./Components/Routes/AppRoutes";
import Layout from "./Components/Layout/Layout";
import { SidebarProvider } from "./Components/Context/SidebarContext";
import { PlayerProvider } from "./Components/Context/PlayerContext";
import Player from "./Components/common/Player";
import BottomPlayer from "./Components/Player/BottomPlayer";

const App = () => {
  return (
    <PlayerProvider>

      <Layout>

        <SidebarProvider>
          <AppRoutes />
          <BottomPlayer />
        </SidebarProvider>

      </Layout>

    
    </PlayerProvider>
  );
};

export default App;