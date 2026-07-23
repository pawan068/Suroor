import { Play, Pause, SkipBack, SkipForward, Heart, ListMusic, Plus, Volume2 } from "lucide-react";
import { usePlayer } from "../Context/PlayerContext";

const formatTime = (time) => {
  if (!time) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const BottomPlayer = () => {
  const { currentSong, isPlaying, togglePlay, currentTime, duration, seekSong, nextSong, prevSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-xl border-t border-zinc-800 px-4 py-3">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        <div className="flex items-center gap-4 w-full md:w-[30%]">
       <img
  key={currentSong?.id}
  src={
    currentSong?.images?.[2]?.url ||
    currentSong?.images?.[1]?.url ||
    currentSong?.images?.[0]?.url ||
    currentSong?.image?.[2]?.url ||
    currentSong?.image?.[1]?.url ||
    currentSong?.image?.[0]?.url ||
    ""
  }
  alt={currentSong?.title}
  className="w-16 h-16 rounded-lg object-cover shadow-lg"
/>

          <div className="overflow-hidden">
            <h2 className="text-white font-semibold truncate">
              {currentSong?.title}
            </h2>

            <p className="text-zinc-400 text-sm truncate">
              {currentSong?.subtitle}
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center gap-3 w-full md:w-[40%]">

          <div className="flex items-center gap-6">

            <button onClick={prevSong} className="text-zinc-300 hover:text-white transition">
              <SkipBack size={22} />
            </button>

            <button onClick={togglePlay} className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg">
              {isPlaying ? (
                <Pause size={26} fill="black" className="text-black" />
              ) : (
                <Play size={26} fill="black" className="text-black ml-1" />
              )}
            </button>

            <button onClick={nextSong} className="text-zinc-300 hover:text-white transition">
              <SkipForward size={22} />
            </button>

          </div>


          <div className="flex items-center gap-3 w-full">

            <span className="text-xs text-zinc-400">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seekSong(e.target.value)}
              className="flex-1 accent-green-500 cursor-pointer"
            />

            <span className="text-xs text-zinc-400">
              {formatTime(duration)}
            </span>

          </div>

        </div>


        <div className="flex items-center justify-end gap-5 w-full md:w-[30%]">

          <button className="text-zinc-300 hover:text-red-500 transition">
            <Heart size={21} />
          </button>

          <button className="text-zinc-300 hover:text-green-500 transition">
            <Plus size={21} />
          </button>

          <button className="text-zinc-300 hover:text-green-500 transition">
            <ListMusic size={21} />
          </button>


          <div className="hidden md:flex items-center gap-3">
            <Volume2 size={20} className="text-white" />

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="w-24 accent-green-500"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default BottomPlayer;