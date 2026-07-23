import { useContext, useEffect, useState } from "react";
import api from "../../api/axios";
import { PlayerContext } from "../../Components/Context/PlayerContext";
import { getArtistById } from "../../Components/Services/songs";
import { useNavigate } from "react-router-dom";

export default function ArtistSection() {


  const [artists, setArtists] = useState([]);

  const [artistSongs, setArtistSongs] = useState([]);

  const { playSong } = useContext(PlayerContext);

  const navigate = useNavigate();



  const handleArtistClick = async (id) => {

    const data = await getArtistById(id);

   

    console.log("TOP SONG:", data?.songs?.top?.[0]);


    if (data?.songs?.top) {

      setArtistSongs(data.songs.top);

    }

  };



  useEffect(() => {

    const getArtists = async () => {

      try {

        const { data } = await api.get("/api/artists");

  



        setArtists(
          data.data ||
          data.results ||
          data.artists ||
          data
        );


      } catch (error) {

        console.log("Artist Error:", error);

      }

    };


    getArtists();

  }, []);



  return (

    <section className="mt-8">


      <h2 className="text-2xl font-bold mb-5">
        Top Artists
      </h2>



      <div className="flex gap-6 overflow-x-auto no-scrollbar">


        {
          artists.map((artist) => (


            <div

              key={artist.id}

              onClick={() => navigate(`/artist/${artist.id}`)}

              className="
              min-w-[150px]
              text-center
              cursor-pointer
              group
              "

            >


              <img

              src={artist.images?.[1]?.url}

                alt={artist.name}

                className="
                w-40
                h-40
                rounded-full
                object-cover
                mx-auto
                transition
                duration-300
                group-hover:scale-105
                "

              />



              <h3 className="mt-3 font-semibold">
                {artist.name}
              </h3>



              <p className="text-sm text-zinc-400">
                Singer
              </p>



            </div>


          ))
        }


      </div>




      {
        artistSongs.length > 0 && (

          <div className="mt-10">


            <h2 className="text-2xl font-bold mb-5">
              Artist Top Songs
            </h2>



            <div className="space-y-3">


              {
                artistSongs.map((song)=>(


                  <div

                    key={song.id}

                    onClick={() => playSong(song)}

                    className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-lg
                    cursor-pointer
                    hover:bg-zinc-800
                    "

                  >


                    <img

                      src={
                        song.images?.[2]?.url ||
                        song.image
                      }

                      alt={song.title}

                      className="
                      w-12
                      h-12
                      rounded
                      object-cover
                      "

                    />



                    <div>


                      <h3 className="font-semibold">
                        {song.title || song.name}
                      </h3>


                      <p className="text-sm text-zinc-400">
                        {song.subtitle || "Song"}
                      </p>


                    </div>


                  </div>


                ))
              }


            </div>


          </div>

        )
      }



    </section>

  );

}