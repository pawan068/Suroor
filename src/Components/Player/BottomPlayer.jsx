import {
  Play, Pause, SkipBack, SkipForward, Heart, ListMusic, Plus, Volume2, X,
  Download
} from "lucide-react";


import { useState } from "react";
import PlaylistModal from "../Common/PlayListModal";
import { useLike } from './../Context/LikeContext';
import { usePlayer } from "../Context/PlayerContext";


const formatTime = (time) => {

  if (!time) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

};




const BottomPlayer = () => {





  const { toggleLike, isLiked } = useLike();

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState(false);

const {
  currentSong,
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  seekSong,
  nextSong,
  prevSong,
  downloadSong
} = usePlayer();


  if (!currentSong) return null;


  const image =
    currentSong?.images?.[2]?.url ||
    currentSong?.images?.[1]?.url ||
    currentSong?.images?.[0]?.url ||
    currentSong?.image?.[2]?.url ||
    currentSong?.image?.[1]?.url ||
    currentSong?.image?.[0]?.url ||
    "";


  return (
    <>

      {
        miniPlayer ? (
          

          <div
            onClick={ () => setMiniPlayer(false) }
            className="fixed bottom-4 right-4 z-50 bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 flex items-center gap-3 shadow-xl cursor-pointer"
          >

            <img
              src={ image }
              className="w-12 h-12 rounded-lg object-cover"
            />

            <div className="w-24">

              <p className="text-white text-sm font-semibold truncate">
                { currentSong?.title }
              </p>

            </div>


            <button
              onClick={ (e) => {
                e.stopPropagation();
                prevSong();
              } }
            >
              <SkipBack size={ 18 } />
            </button>


            <button
              onClick={ (e) => {
                e.stopPropagation();
                togglePlay();
              } }
            >
              {
                isPlaying ?
                  <Pause size={ 18 } /> :
                  <Play size={ 18 } />
              }
            </button>


            <button
              onClick={ (e) => {
                e.stopPropagation();
                nextSong();
              } }
            >
              <SkipForward size={ 18 } />
            </button>


          </div>


        ) : (


          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-xl border-t border-zinc-800 px-4 py-3">


            <button
              onClick={ () => setMiniPlayer(true) }
              className="absolute right-5 top-2 text-zinc-400 hover:text-white"
            >
              <X size={ 20 } />
            </button>


            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">


              <div className="flex items-center gap-4 w-full md:w-[30%]">

                <img
                  key={ currentSong?.id }
                  src={ image }
                  alt={ currentSong?.title }
                  className="w-16 h-16 rounded-lg object-cover shadow-lg"
                />


                <div className="overflow-hidden">

                  <h2 className="text-white font-semibold truncate">
                    { currentSong?.title }
                  </h2>


                  <p className="text-zinc-400 text-sm truncate">
                    { currentSong?.subtitle }
                  </p>

                </div>

              </div>



              <div className="flex flex-col items-center gap-3 w-full md:w-[40%]">


                <div className="flex items-center gap-6">

                  <button onClick={ prevSong } className="cursor-pointer">
                    <SkipBack size={ 22 } />
                  </button>


                  <button
                    onClick={ togglePlay }
                    className="w-14 h-14 rounded-full cursor-pointer  bg-green-500 flex items-center justify-center"
                  >

                    {
                      isPlaying ?
                        <Pause size={ 26 } fill="black" stroke="black" /> :
                        <Play size={ 26 } fill="black " stroke="black" />
                    }

                  </button>


                  <button onClick={ nextSong } className="cursor-pointer">
                    <SkipForward size={ 22 } />
                  </button>


                </div>



                <div className="flex items-center gap-3 w-full">

                  <span className="text-xs text-zinc-400">
                    { formatTime(currentTime) }
                  </span>


                  <input
                    type="range"
                    min="0"
                    max={ duration || 0 }
                    value={ currentTime }
                    onChange={ (e) => seekSong(e.target.value) }
                    className="flex-1 accent-green-500"
                  />


                  <span className="text-xs text-zinc-400">
                    { formatTime(duration) }
                  </span>


                </div>


              </div>




              <div className="flex items-center justify-end gap-5 w-full md:w-[30%]">


                <button
                  onClick={ () => toggleLike(currentSong) }
                  className="text-zinc-300 hover:text-red-500 transition"
                >
                  <Heart
                    size={ 21 }
                    className={ isLiked(currentSong.id) ? "text-red-500" : "" }
                    fill={ isLiked(currentSong.id) ? "red" : "none" }
                  />
                </button>


                <button onClick={ () => setShowPlaylistModal(true) }>
                  <Plus size={ 21 } />
                </button>


                <button
                  className="text-zinc-400 cursor-pointer hover:text-white transition"
                onClick={() => downloadSong(currentSong)}>
                  <Download size={ 22 } />

                
                  
                </button>


                <div className="hidden md:flex items-center gap-3">

                  <Volume2 size={ 20 } />

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

        )
      }



      {
        showPlaylistModal && (
          <PlaylistModal
            song={ currentSong }
            onClose={ () => setShowPlaylistModal(false) }
          />
        )
      }


    </>
  );

};


export default BottomPlayer;