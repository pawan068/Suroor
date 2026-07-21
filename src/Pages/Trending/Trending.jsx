import SongCard from "../../components/common/SongCard";

const Trending = () => {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Trending Songs
        </h1>

        <p className="text-zinc-400 mt-2">
          Discover what's trending right now.
        </p>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

      </div>

    </div>
  );
};

export default Trending;