import { Link } from "react-router-dom";
import { Music2 } from "lucide-react";
import { usePlaylist } from "../Components/Context/PlayListContext";

const Playlist = () => {
  const { playlists } = usePlaylist();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">

      <h1 className="text-4xl font-bold mb-8">
        Your Playlists
      </h1>


      {playlists.length === 0 ? (

        <div className="flex flex-col items-center justify-center mt-28">

          <Music2 size={70} className="text-zinc-600 mb-5" />

          <h2 className="text-2xl font-semibold">
            No Playlists Yet
          </h2>

          <p className="text-zinc-400 mt-2">
            Create a playlist from the player.
          </p>

        </div>

      ) : (

        <div className="h-[600px] overflow-y-auto scrollbar-hide pr-2">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {playlists.map((playlist) => (

              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-5 transition"
              >

                <div className="w-full aspect-square rounded-lg bg-zinc-800 overflow-hidden flex items-center justify-center">

                  {playlist.songs.length > 0 ? (

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
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <Music2 size={50} className="text-green-400" />

                  )}

                </div>


                <h2 className="mt-4 font-semibold text-lg truncate">
                  {playlist.name}
                </h2>


                <p className="text-zinc-400 text-sm">
                  {playlist.songs.length} Songs
                </p>


              </Link>

            ))}

          </div>

        </div>

      )}

    </div>
  );
};

export default Playlist;