import { Heart, History, Music2, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import PlaylistModal from "../Components/Common/PlayListModal";
import { usePlaylist } from "../Components/Context/PlayListContext";
import { useLike } from "../Components/Context/LikeContext";
import LikedSongs from './LikedSongs';
import { useRecent } from "../Components/Context/RecentlyPlayedContext";


const Library = () => {

  const { recentSongs} = useRecent();

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);


  const { playlists, deletePlaylist } = usePlaylist();

  const {likedSongs} = useLike();


  return (

    <>

      <div className="min-h-screen bg-black text-white px-5 md:px-8 py-8">

        <h1 className="text-4xl font-bold mb-8">
          Your Library
        </h1>


        {/* Liked Songs */ }

   <Link
  to="/LikedSongs"
  className="block block bg-gradient-to-r border border-zinc-700 from-green-800 via-green-900 to-green rounded-3xl p-7 shadow-xl hover:scale-[1.01] transition mb-12"
>

  <div className="flex items-center justify-between">

    <div>

      <p className="uppercase text-xs tracking-[4px] text-green-100">
        Collection
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Liked Songs
      </h2>

      <p className="text-green-100 mt-3">
        Your favourite tracks in one place
      </p>

      <p className="text-white font-semibold mt-4">
        {likedSongs.length} {likedSongs.length === 1 ? "Song" : "Songs"}
      </p>

    </div>

    <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">

      <Heart size={50} fill="white" className="text-white" />

    </div>

  </div>

</Link>


        {/* Playlist Header */ }
<Link
  to="/playlist-banner"
  className="block block bg-gradient-to-r from-green-800 via-green-900 to-green rounded-3xl p-7 shadow-xl hover:scale-[1.01] transition mb-12 border border-zinc-700"
>

  <div className="flex items-center justify-between">

    <div>

      <p className="uppercase text-xs tracking-[4px] text-zinc-400">
        Collection
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Your Playlists
      </h2>

      <p className="text-zinc-400 mt-3">
        All your playlists in one place
      </p>

      <p className="text-green-400 font-semibold mt-4">
        {playlists.length} {playlists.length === 1 ? "Playlist" : "Playlists"}
      </p>

    </div>

    <div className="w-24 h-24 rounded-2xl bg-green-500/20 flex items-center justify-center">

      <Music2
        size={52}
        className="text-green-400"
      />

    </div>

  </div>

</Link>



{/* now recently played */}


<Link
  to="/recently-played"
  className="block bg-gradient-to-r from-green-800 via-green-900 to-green rounded-3xl p-7 shadow-xl hover:scale-[1.01] transition mb-12 border border-zinc-700"
>
  <div className="flex items-center justify-between">

    <div>
      <p className="uppercase text-xs tracking-[4px] text-zinc-400">
        History
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Recently Played
      </h2>

      <p className="text-zinc-400 mt-3">
        Continue where you left off
      </p>

<p className="text-green-100 mt-4">
  {recentSongs.length} {recentSongs.length === 1 ? "Song" : "Songs"}
</p>
    </div>

    <div className="w-24 h-24 rounded-2xl bg-green-500/20 flex items-center justify-center">
      <History size={50} className="text-green-400" />
    </div>

  </div>
</Link>



      </div>


  {
        showPlaylistModal && (

          <PlaylistModal
            song={null}
            onClose={() => setShowPlaylistModal(false)}
          />

        )
      }



      </>

      );

};


      export default Library;