import React, { useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { usePlayer } from "../../Components/Context/PlayerContext";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-700 px-4 py-3">

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Song Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">

          <img
            src={currentSong?.images?.[2]?.url}
            alt={currentSong?.title}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover flex-shrink-0"
          />

          <div className="min-w-0">

            <h3 className="text-white font-semibold text-sm md:text-base truncate">
              {currentSong?.title}
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm truncate">
              {currentSong?.subtitle}
            </p>

          </div>

        </div>

        {/* Controls */}
        <button
          onClick={togglePlay}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-105 transition flex-shrink-0"
        >
          {isPlaying ? (
            <Pause size={20} fill="black" className="text-black" />
          ) : (
            <Play size={20} fill="black" className="text-black ml-0.5" />
          )}
        </button>

      </div>

      <audio
        ref={audioRef}
        src={currentSong?.media?.previewUrl}
      />

    </div>
  );
};

export default Player;