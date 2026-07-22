import React from "react";
import AppRoutes from "./Components/Routes/AppRoutes";
import Layout from "./Components/Layout/Layout";
import { SidebarProvider } from "./Components/Context/SidebarContext";
import { PlayerProvider } from "./Components/Context/PlayerContext";
import Player from "./Components/common/Player";

const App = () => {
  return (
    <PlayerProvider>

      <Layout>

        <SidebarProvider>
          <AppRoutes />
        </SidebarProvider>

      </Layout>

      <Player />

    </PlayerProvider>
  );
};

export default App;