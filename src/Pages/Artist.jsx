import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getArtistById } from "../Components/Services/songs";
import { PlayerContext } from "../Components/Context/PlayerContext";


const Artist = () => {

  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [following, setFollowing] = useState(false);


  const { playSong } = useContext(PlayerContext);



  useEffect(() => {

    const fetchArtist = async () => {

      try {

        const data = await getArtistById(id);

        console.log("ARTIST:", data);


        setArtist(data);

        setSongs(data?.songs?.top || []);


      } catch(error){

        console.log("Artist Error:", error);

      }

    };


    fetchArtist();

  }, [id]);



  if(!artist){

    return (
      <h1 className="text-white p-10">
        Loading...
      </h1>
    );

  }



  const artistImage =
    artist.images?.find(
      img => img.resolution === "500x500"
    )?.url ||
    artist.images?.[2]?.url;



  const playAll = () => {

    if(songs.length){

      playSong(songs[0]);

    }

  };



  return (

    <div className="min-h-screen bg-black text-white">


      <div className="max-w-7xl mx-auto px-5 py-10">


        {/* Artist Header */}

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          md:items-end
          gap-8
        ">


          <img

            src={artistImage}

            alt={artist.name}

            className="
            w-52
            h-52
            md:w-72
            md:h-72
            rounded-full
            object-cover
            shadow-2xl
            "

          />



          <div className="text-center md:text-left">


            <p className="text-zinc-400 uppercase">
              Artist
            </p>


            <h1 className="
              text-4xl
              md:text-7xl
              font-black
              mt-3
            ">
              {artist.name}
            </h1>


            <p className="text-zinc-400 mt-3">
              {artist.subtitle}
            </p>



            <div className="flex gap-4 mt-6 justify-center md:justify-start">


              <button

                onClick={playAll}

                className="
                bg-green-500
                text-black
                px-6
                py-2
                rounded-full
                font-bold
                "

              >

                ▶ Play All

              </button>



              <button

                onClick={()=>setFollowing(!following)}

                className="
                border
                border-zinc-500
                px-6
                py-2
                rounded-full
                "

              >

                {
                  following
                  ? "Following"
                  : "Follow"
                }

              </button>


            </div>


          </div>


        </div>




        {/* Songs */}


        <div className="mt-12">


          <h2 className="
            text-2xl
            font-bold
            mb-5
          ">

            Popular Songs

          </h2>




          <div className="space-y-3">


            {
              songs.map((song)=>(


                <div

                  key={song.id}

                  onClick={()=>playSong(song)}

                  className="
                  flex
                  items-center
                  gap-4
                  p-3
                  rounded-lg
                  cursor-pointer
                  hover:bg-zinc-900
                  "

                >


                  <img

                    src={
                      song.images?.[1]?.url ||
                      song.images?.[0]?.url
                    }

                    alt={song.title}

                    className="
                    w-14
                    h-14
                    rounded
                    object-cover
                    "

                  />



                  <div>


                    <h3 className="font-semibold">

                      {song.title}

                    </h3>


                    <p className="text-sm text-zinc-400">

                      {song.subtitle}

                    </p>


                  </div>


                </div>


              ))
            }


          </div>


        </div>



      </div>


    </div>

  );

};


export default Artist;