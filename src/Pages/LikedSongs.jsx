import { Heart, Play } from "lucide-react";
import { useLike } from "../Components/Context/LikeContext";
import { usePlayer } from "../Components/Context/PlayerContext";

const LikedSongs = () => {

  const { likedSongs, toggleLike } = useLike();
  const { playSong } = usePlayer();


  return (

    <div className="min-h-screen bg-black text-white px-4 sm:px-5 md:px-8 py-6 md:py-8">


      {/* Header */}

      <div className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-700 rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row items-center sm:justify-between gap-6 mb-8">


        <div className="w-full">

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs text-green-100">
            Collection
          </p>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Liked Songs
          </h1>


          <p className="text-green-100 mt-3">
            {likedSongs.length} {likedSongs.length === 1 ? "Song" : "Songs"}
          </p>


        </div>



        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white/20 flex items-center justify-center">


          <Heart
            size={45}
            className="text-white"
            fill="white"
          />


        </div>


      </div>





      {/* Empty State */}


      {
        likedSongs.length === 0 ? (

          <div className="bg-zinc-900 rounded-3xl py-16 sm:py-20 text-center px-5">


            <Heart
              size={55}
              className="mx-auto text-green-500 mb-5"
            />


            <h2 className="text-xl sm:text-2xl font-bold">
              No Liked Songs
            </h2>


            <p className="text-zinc-400 mt-3 text-sm sm:text-base">
              Like songs to see them here.
            </p>


          </div>


        ) : (


          <div className="space-y-3">


            {
              likedSongs.map((song,index)=>(


                <div
                  key={song.id}
                  className="bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 transition"
                >



                  {/* Song Info */}


                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">


                    <span className="text-zinc-500 w-5 sm:w-6 text-sm">
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
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
                    />



                    <div className="min-w-0">


                      <h3 className="font-semibold truncate max-w-[120px] sm:max-w-[250px] md:max-w-md">
                        {song.title}
                       
                      </h3>


                    </div>


                  </div>





                  {/* Buttons */}


                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">


                    <button
                      onClick={() => playSong(song, likedSongs)}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition"
                    >

                      <Play
                        size={16}
                        className="sm:w-[18px]"
                        fill="black"
                      />

                    </button>




                    <button
                      onClick={() => toggleLike(song)}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition"
                    >

                      <Heart
                        size={16}
                        className="sm:w-[18px] text-white"
                        fill="white"
                      />

                    </button>


                  </div>



                </div>


              ))
            }


          </div>


        )
      }


    </div>

  );

};


export default LikedSongs;