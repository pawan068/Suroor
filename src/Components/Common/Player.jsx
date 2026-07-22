import React, { useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { usePlayer } from "../../Components/Context/PlayerContext";

const Player = () => {

  const {
    currentSong,
    isPlaying,
    togglePlay
  } = usePlayer();

  const audioRef = useRef(null);


  useEffect(() => {

    if (!currentSong) return;

    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }

  }, [isPlaying, currentSong]);


  if (!currentSong) return null;


  return (
    <div className="
      fixed
      bottom-0
      left-0
      right-0
      bg-zinc-900
      border-t
      border-zinc-700
      p-4
      flex
      items-center
      justify-between
      z-50
    ">

      {/* Song Info */}
      <div className="flex items-center gap-4">

        <img
          src={currentSong?.images?.[2]?.url}
          alt={currentSong?.title}
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 className="text-white font-semibold">
            {currentSong?.title}
          </h3>

          <p className="text-gray-400 text-sm max-w-[200px] truncate">
            {currentSong?.subtitle}
          </p>
        </div>

      </div>


      {/* Controls */}
      <button
        onClick={togglePlay}
        className="
          w-12
          h-12
          rounded-full
          bg-green-500
          flex
          items-center
          justify-center
        "
      >

        {isPlaying ? (
          <Pause fill="black" />
        ) : (
          <Play fill="black" />
        )}

      </button>


      <audio
        ref={audioRef}
        src={currentSong?.media?.previewUrl}
      />

    </div>
  );
};

export default Player;