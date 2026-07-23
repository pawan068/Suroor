import { useEffect, useState, useContext } from "react";
import api from "../../api/axios";
import { getAlbumById } from "../../Components/Services/songs";
import { PlayerContext } from "../../Components/Context/PlayerContext";

export default function AlbumSection() {

  const { playSong } = useContext(PlayerContext);

  const [albums, setAlbums] = useState([]);


  const handleAlbumClick = async (id, album) => {

    try {

      const data = await getAlbumById(id);

      console.log("ALBUM DATA:", data);


      if (data?.songs?.length) {

     const albumSongs = data.songs.map((song) => ({
  ...song,
  images: song.image || song.images || album.images,
}));

        playSong(albumSongs[0], albumSongs);

      }

    } catch (error) {

      console.log("Album Fetch Error:", error);

    }

  };


  useEffect(() => {

    const getAlbums = async () => {

      try {

        const { data } = await api.get("/api/albums");

        setAlbums(data);

      } catch (error) {

        console.log("Album Error:", error);

      }

    };


    getAlbums();

  }, []);



  return (
    <section className="mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Popular Albums
      </h2>


      <div className="flex gap-5 overflow-x-auto no-scrollbar">

        {albums.map((album) => (

          <div
            key={album.id}
            onClick={() => handleAlbumClick(album.id, album)}
            className="min-w-[180px] bg-zinc-900 p-3 rounded-xl cursor-pointer hover:bg-zinc-800 transition"
          >

            <img
              src={album.images?.[2]?.url}
              alt={album.title}
              className="rounded-lg w-full aspect-square object-cover"
            />


            <h3 className="mt-2 font-semibold truncate">
              {album.title}
            </h3>


            <p className="text-sm text-gray-400 truncate">
              {album.subtitle}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}