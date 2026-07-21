

import AlbumSection from "./HomeCompo/AlbumSection";
import ArtistSection from "./HomeCompo/ArtistSection";
import Hero from "./HomeCompo/Hero";
import TrendingSection from "./HomeCompo/TrendingSection";

const Home = () => {
  return (
    <div className="space-y-14">

      <Hero />

      <TrendingSection/>

      <AlbumSection />

      <ArtistSection />

    </div>
  );
};

export default Home;