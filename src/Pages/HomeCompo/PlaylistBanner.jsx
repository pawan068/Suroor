import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Music2, Trash2 } from "lucide-react";
import { usePlaylist } from "../../Components/Context/PlayListContext";
import PlaylistModal from './../../Components/Common/PlayListModal';
const PlaylistBanner = () => {

     const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    
    
      const { playlists, deletePlaylist } = usePlaylist();

  return (
   <>
   
   
          {/* Playlist Header */ }

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Your Playlists
          </h2>


          <button
            onClick={ () => setShowPlaylistModal(true) }
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-full font-semibold transition"
          >
            <Plus size={ 18 } />
            New Playlist
          </button>

        </div>



        {/* Playlist Grid */ }

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


          { playlists.length === 0 ? (


            <div className="col-span-full bg-zinc-900 rounded-2xl py-16 text-center">

              <Music2 size={ 60 } className="mx-auto text-green-500 mb-4" />


              <h3 className="text-xl font-semibold">
                No Playlist Yet
              </h3>


              <p className="text-zinc-400 mt-2">
                Create your first playlist from any song.
              </p>


            </div>


          ) : (


            playlists.map((playlist) => (


              <Link
                key={ playlist.id }
                to={ `/playlist/${playlist.id}` }
                className="relative bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(34,197,green,.25)] transition-all duration-300"
              >


                {/* Delete Button */ }

                <button
                  onClick={ (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deletePlaylist(playlist.id);
                  } }
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition"
                >

                  <Trash2 size={ 18 } />

                </button>



                <div className="aspect-square rounded-xl bg-zinc-800 overflow-hidden flex items-center justify-center">


                  { playlist.songs.length > 0 ? (


                    <img
                      src={
                        playlist.songs[0]?.images?.[2]?.url ||
                        playlist.songs[0]?.images?.[1]?.url ||
                        playlist.songs[0]?.images?.[0]?.url ||
                        playlist.songs[0]?.image?.[2]?.url ||
                        playlist.songs[0]?.image?.[1]?.url ||
                        playlist.songs[0]?.image?.[0]?.url ||
                        ""
                      }
                      alt={ playlist.name }
                      className="w-full h-full object-cover"
                    />


                  ) : (


                    <Music2 size={ 45 } className="text-green-400" />


                  ) }


                </div>



                <h3 className="mt-4 font-semibold truncate">

                  { playlist.name }

                </h3>



                <p className="text-zinc-400 text-sm">

                  { playlist.songs.length } Songs

                </p>



              </Link>


            ))


          ) }


        </div>


        {showPlaylistModal && (
  <PlaylistModal
    song={null}
    onClose={() => setShowPlaylistModal(false)}
  />
)}
   
   </>
  )
}

export default PlaylistBanner
