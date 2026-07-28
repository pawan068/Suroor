import { History, Play, Trash2 } from "lucide-react";
import { usePlayer } from "../../Components/Context/PlayerContext";
import { useRecent } from "../../Components/Context/RecentlyPlayedContext";
import { useState } from "react";
const RecentlyPlayer = () => {

  const { recentSongs , clearRecent } = useRecent();

  
  const { playSong } = usePlayer();

  

  return (


    <>

<div className="w-full flex justify-between px-5">
  <div className="flex items-center">Pick up right where you left off</div>
  <div onClick={clearRecent} className="p-3 bg-green-50 rounded-full cursor-pointer text-red-600"> 
    <Trash2/> </div>
</div>
     

    <div className="min-h-screen bg-black text-white px-5 md:px-8 py-8">

      {/* Header */}

     

      {/* Empty State */}

    

      {recentSongs.length === 0 ? (

        <div className="bg-zinc-900 rounded-3xl py-20 text-center">

          <History
            size={60}
            className="mx-auto text-green-500 mb-5"
          />

          <h2 className="text-2xl font-bold">
            No Recently Played Songs
          </h2>

          <p className="text-zinc-400 mt-3">
            Start playing songs to build your history.
          </p>

        </div>
        

      )
       : (

        <div className="space-y-3">

          {recentSongs.map((song, index) => (

            <div
              key={song.id}
              className="flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-3 md:p-4 transition"
            >

              <div className="flex items-center gap-3 md:gap-4 min-w-0">

                <span className="text-zinc-500 w-6 hidden sm:block">
                  {index + 1}
                </span>

                <img
                  src={
                    song?.images?.[2]?.url ||
                    song?.images?.[1]?.url ||
                    song?.images?.[0]?.url ||
                    song?.image?.[2]?.url ||
                    song?.image?.[1]?.url ||
                    song?.image?.[0]?.url ||
                    ""
                  }
                  alt={song.title}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />

                <div className="min-w-0">

                  <h3 className="font-semibold truncate">
                    {song.title}
                  </h3>

                  <p className="text-zinc-400 text-sm truncate">
                    {song.primaryArtists || song.artist || "Unknown Artist"}
                  </p>

                </div>

              </div>

              <button
                onClick={() => playSong(song, recentSongs)}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition flex-shrink-0"
              >

                <Play
                  size={18}
                  fill="black"
                />

              </button>

            </div>

          ))}

        </div>

      )}

    </div>

    </>

  );
};

export default RecentlyPlayer;