import { Link } from "react-router-dom";
import { UserCheck } from "lucide-react";
import { useArtistFollow } from "../HomeCompo/ArtistFollowing";

const FollowedArtists = () => {

  const { followedArtists } = useArtistFollow();

  return (

    <div className="min-h-screen bg-black text-white px-5 md:px-8 py-8">

      <h1 className="text-4xl font-bold mb-8">
        Followed Artists
      </h1>

      {
        followedArtists.length === 0 ? (

          <div className="bg-zinc-900 rounded-2xl py-16 text-center">

            <UserCheck size={60} className="mx-auto text-green-500 mb-4" />

            <h2 className="text-2xl font-semibold">
              No Followed Artists
            </h2>

            <p className="text-zinc-400 mt-2">
              Follow your favourite artists to see them here.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {
              followedArtists.map((artist) => (

                <Link
                  key={artist.id}
                  to={`/artist/${artist.id}`}
                  className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(34,197,94,.25)] transition-all duration-300"
                >

                  <img
                    src={
                      artist.images?.[2]?.url ||
                      artist.images?.[1]?.url ||
                      artist.images?.[0]?.url
                    }
                    alt={artist.name}
                    className="w-full aspect-square rounded-full object-cover"
                  />

                  <h3 className="mt-4 text-center font-semibold truncate">
                    {artist.name}
                  </h3>

                  <p className="text-center text-zinc-400 text-sm">
                    Singer
                  </p>

                </Link>

              ))
            }

          </div>

        )
      }

    </div>

  );

};

export default FollowedArtists;