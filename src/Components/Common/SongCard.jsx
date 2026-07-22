import React from "react";
import { Play } from "lucide-react";
import { usePlayer } from "../../Components/Context/PlayerContext";

const SongCard = ({ song }) => {

  const { playSong } = usePlayer();

  return (
    <div className="group relative bg-zinc-900 p-4 rounded-xl overflow-hidden">

      <div className="relative">

        <img
          src={song?.images?.[2]?.url}
          alt={song?.title}
          className="w-full aspect-square object-cover rounded-lg"
        />

        {/* Play Button */}
        <button
          onClick={() => {
            console.log("PLAY CLICKED:", song.title);
            playSong(song);
          }}
          className="
            absolute
            bottom-3
            right-3
            w-12
            h-12
            rounded-full
            bg-green-500
            text-black
            flex
            items-center
            justify-center
            opacity-0
            translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
            shadow-lg
          "
        >
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