import SongCard from "../../Components/common/SongCard";
import SectionHeader from "../../Components/common/SectionHeader";
import { useSongs } from "../../Components/Context/SongContext";

const TrendingSection = () => {
  const { songs, loading } = useSongs();
  console.log("TOTAL SONGS:", songs.length);

  return (
    <section>

      <SectionHeader title="Trending Songs" to="/trending" />

      {loading ? (
        <p className="text-white mt-5">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

          {Array.isArray(songs) &&
            songs.slice(0, 100).map((song) => (
              <SongCard
                key={song.id}
                song={song}
                songs={songs}
              />
            ))}

        </div>
      )}

    </section>
  );
};

export default TrendingSection;