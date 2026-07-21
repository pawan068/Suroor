import { FaPlay } from "react-icons/fa";

const SongCard = ({ song }) => {
  return (
    <div className="group bg-zinc-900 rounded-xl p-4 hover:bg-zinc-800 transition-all duration-300 cursor-pointer">

      {/* Album Image */}
      <div className="relative overflow-hidden rounded-lg">

        <img
          src={song.image}
          alt={song.name}
          className="w-full aspect-square object-cover rounded-lg transition duration-300 group-hover:scale-110"
        />

        {/* Play Button */}
        <button
          className=" absolute bottom-3 right-3 w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg
          "
        >
          <FaPlay className="ml-1" />
        </button>

      </div>

      <h3 className="mt-4 font-semibold truncate group-hover:text-green-400 transition">
        {song.name}
      </h3>

      <p className="text-zinc-400 text-sm truncate">
        {song.artist}
      </p>

    </div>
  );
};

export default SongCard;