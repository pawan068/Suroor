import SectionHeader from "../../components/common/SectionHeader";
import AlbumCard from "../../components/common/AlbumCard";

const AlbumSection = () => {
  return (
    <section>

      <SectionHeader title="Popular Albums" to="/albums" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

      </div>

    </section>
  );
};

export default AlbumSection;