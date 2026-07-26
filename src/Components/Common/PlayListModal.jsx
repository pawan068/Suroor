import { useState } from "react";
import { Trash2 } from "lucide-react";
import { usePlaylist } from "../Context/PlayListContext";


const PlaylistModal = ({ song, onClose }) => {

  const {
    playlists,
    createPlaylist,
    addSongToPlaylist,
    deletePlaylist
  } = usePlaylist();


  const [name, setName] = useState("");


  const handleCreate = () => {

    if (!name.trim()) return;

    createPlaylist(name);

    setName("");

  };


const handleAddSong = (playlistId) => {

  if(!song) return;

  addSongToPlaylist(
    playlistId,
    song
  );

  onClose();

};


  const handleDelete = (id) => {

    deletePlaylist(id);

  };


  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">


      <div className="bg-zinc-900 w-[350px] rounded-xl p-6">


        <h2 className="text-xl font-semibold mb-5">
          Add to Playlist
        </h2>



        {/* Create Playlist */}

        <div className="flex gap-2 mb-5">


          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Playlist name"
            className="flex-1 bg-zinc-800 rounded-lg px-3 py-2 outline-none"
          />


          <button
            onClick={handleCreate}
            className="bg-green-500 text-black px-4 rounded-lg"
          >
            +
          </button>


        </div>



        {/* Existing Playlists */}

        <div className="space-y-2 max-h-60 overflow-y-auto">


          {
            playlists.map((playlist)=>(

              <div
                key={playlist.id}
                className="flex items-center justify-between bg-zinc-800 rounded-lg p-3"
              >


                <button
                  onClick={()=>handleAddSong(playlist.id)}
                  className="text-left flex-1"
                >

                  <p className="font-medium">
                    {playlist.name}
                  </p>

                  <p className="text-xs text-zinc-400">
                    {playlist.songs.length} songs
                  </p>

                </button>



                <button
                  onClick={()=>handleDelete(playlist.id)}
                  className="text-red-500 hover:text-red-400"
                >

                  <Trash2 size={18}/>

                </button>


              </div>


            ))
          }


        </div>



        <button
          onClick={onClose}
          className="mt-5 w-full bg-zinc-700 py-2 rounded-lg"
        >
          Cancel
        </button>


      </div>


    </div>

  );

};


export default PlaylistModal;