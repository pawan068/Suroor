import SongCard from "../../components/common/SongCard";
import SectionHeader from "../../components/common/SectionHeader";

const TrendingSection = () => {
  return (
    <section>

      <SectionHeader title="Trending Songs" to="/trending" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

      </div>

    </section>
  );
};

export default TrendingSection;