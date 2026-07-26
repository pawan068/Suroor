import React from "react";
import { Play } from "lucide-react";
import { usePlayer } from "../../Components/Context/PlayerContext";

const SongCard = ({ song, songs }) => {
  const { playSong } = usePlayer();

  return (
    <div className="group  relative bg-zinc-900 p-4 rounded-xl overflow-hidden">

      <div className="relative">

        <img
          src={song?.images?.[2]?.url}
          alt={song?.title}
          className="w-full aspect-square object-cover rounded-lg"
        />

        <button
          onClick={() => playSong(song, songs)}
className="absolute bottom-3 right-3 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-500 text-black flex items-center justify-center  lg:opacity-0 lg:translate-y-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 shadow-lg"        >
          <Play size={22} fill="black" />
        </button>

      </div>

      <h3 className="text-white mt-3 font-semibold truncate">
        {song?.title}
      </h3>

      <p className="text-gray-400 text-sm truncate">
        {song?.subtitle}
      </p>

    </div>
  );
};

export default SongCard;