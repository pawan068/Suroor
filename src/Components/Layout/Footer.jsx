import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Volume2,
} from "lucide-react";
import { usePlayer } from "../Context/PlayerContext";

;

const Footer = () => {
  const { currentSong, isPlaying, togglePlay } = usePlayer();

  return (
    <footer className="h-20 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between px-6">

      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/4">

        <div className="w-14 h-14 bg-zinc-700 rounded-md"></div>

        <div>

          <h3 className="font-semibold">
            {currentSong?.name || "No song selected"}
          </h3>

          <p className="text-sm text-gray-400">
            {currentSong?.artist || "Unknown Artist"}
          </p>

        </div>

      </div>

      {/* Controls */}

      <div className="flex items-center gap-5">

        <SkipBack className="cursor-pointer" />

        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <SkipForward className="cursor-pointer" />

      </div>

      {/* Volume */}

      <div className="flex items-center gap-3 w-1/4 justify-end">

        <Volume2 />

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="80"
        />

      </div>

    </footer>
  );
};

export default Footer;