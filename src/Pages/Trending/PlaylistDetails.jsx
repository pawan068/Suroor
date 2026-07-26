import { Play, Trash, Trash2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../Components/Context/PlayListContext";
import { usePlayer } from "../../Components/Context/PlayerContext";

const PlaylistDetails = () => {
  const { id } = useParams();

  const {
  playlists,
  removeSongFromPlaylist
} = usePlaylist();

  const { playSong } = usePlayer();

  const playlist = playlists.find((item) => item.id.toString() === id);

  if (!playlist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Playlist Not Found
        </h2>
      </div>
    );
  }

return (
  <div className="min-h-screen bg-black text-white px-6 py-8">

    <h1 className="text-4xl font-bold">
      {playlist.name}
    </h1>

    <p className="text-zinc-400 mt-2 mb-8">
      {playlist.songs.length} Songs
    </p>

    <div className="space-y-3">

      {playlist.songs.map((song, index) => (

        <div key={song.id} className="flex items-center gap-3">

          {/* Song Card */}

          <div className="flex-1 flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 rounded-xl p-4 transition">

            <div className="flex items-center gap-4">

              <span className="text-zinc-500 w-6">
                {index + 1}
              </span>

              <img
                src={
                  song?.images?.[2]?.url ||
                  song?.images?.[1]?.url ||
                  song?.images?.[0]?.url ||
                  song?.image?.[2]?.url ||
                  song?.image?.[1]?.url ||
                  song?.image?.[0]?.url
                }
                alt={song.title}
                className="w-14 h-14 rounded-lg object-cover"
              />

              <div>

                <h3 className="font-semibold">
                  {song.title}
                </h3>

                <p className="text-zinc-400 text-sm">
                 
                </p>

              </div>

            </div>

            <button
              onClick={() => playSong(song, playlist.songs)}
              className="w-11 h-11 cursor-pointer rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition"
            >
              <Play size={18} fill="black" />
            </button>

          </div>

          {/* Delete Button */}

          <button
            onClick={() => removeSongFromPlaylist(playlist.id, song.id)}
            className="w-11 h-11 cursor-pointer rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition"
          >
            <Trash2 size={18} className="text-white" />
          </button>

        </div>

      ))}

    </div>

  </div>
);
};

export default PlaylistDetails;