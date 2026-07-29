import { useState, useEffect, useContext } from "react";
import api from "../api/axios";
import { PlayerContext } from "../Components/Context/PlayerContext";

const languages = [
  "Hindi",
  "English",
  "Punjabi",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Bhojpuri",
  "Haryanvi",
  "Malayalam",
  "Kannada",
];

export default function Search() {

  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { playSong } = useContext(PlayerContext);



  const getSongs = async (searchQuery) => {

    try {

      setLoading(true);

      const { data } = await api.get(`/api/search?query=${searchQuery}`);

      console.log(data);

   const validSongs = (data.results || []).filter(
  (song) => song.url
);

setSongs(validSongs);

setSongs(validSongs);

    } catch(error) {

      console.log("Search Error:", error);

    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    if(query.trim()) {

      getSongs(query);

    } else {

      getSongs(selectedLanguage);

    }

  }, [selectedLanguage, query]);



  return (

    <div className="min-h-screen bg-black text-white p-6">


      <h1 className="text-4xl font-bold mb-8">
        Search
      </h1>



      <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search songs, artists..."
        className="w-full max-w-xl bg-zinc-900 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-green-500"
      />



      <h2 className="text-xl font-semibold mt-8 mb-5">
        Browse by Language
      </h2>



      <div className="flex gap-4 overflow-x-auto no-scrollbar">

        {
          languages.map((language)=>(

            <button
              key={language}
              onClick={()=> {
                setSelectedLanguage(language);
                setQuery("");
              }}
              className={`px-6 py-3 rounded-full cursor-pointer whitespace-nowrap transition ${selectedLanguage===language ? "bg-green-500 text-black" : "bg-zinc-900 hover:bg-zinc-800"}`}
            >

              {language}

            </button>

          ))
        }

      </div>




      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          {query ? `Results for "${query}"` : `${selectedLanguage} Songs`}
        </h2>



        {
          loading ? (

            <p className="text-zinc-400">
              Loading...
            </p>

          ) : (

            <div className="space-y-3">

              {
                songs.map((song)=>(

                  <div
                    key={song.id}
                    onClick={()=>playSong(song, songs)}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-900 cursor-pointer transition"
                  >

                    <img
                      src={song.images?.[2]?.url || song.image}
                      alt={song.title}
                      className="w-14 h-14 rounded object-cover"
                    />


                    <div className="min-w-0">

                      <h3 className="font-semibold truncate">
                        {song.title}
                      </h3>

                      <p className="text-sm text-zinc-400 truncate">
                        {song.subtitle}
                      </p>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }


      </div>


    </div>

  );

}