import { FaPlay } from "react-icons/fa";

const AlbumCard = ({ album }) => {

  const image =
    album?.image?.[2]?.url ||
    album?.image?.[1]?.url ||
    album?.image?.[0]?.url ||
    "";

  return (
    <div className="group bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer">

      <div className="relative overflow-hidden rounded-lg">

        <img
          src={image}
          alt={album.name}
          className="
            w-full
            aspect-square
            object-cover
            transition
            duration-300
            group-hover:scale-110
          "
        />


        <button
          className="
            absolute
            bottom-3
            right-3
            w-12
            h-12
            rounded-full
            bg-green-500
            text-black
            flex
            items-center
            justify-center
            opacity-0
            translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
            shadow-lg
          "
        >
          <FaPlay className="ml-1" />
        </button>

      </div>


      <h3 className="mt-4 font-semibold truncate">
        {album.name}
      </h3>


      <p className="text-zinc-400 text-sm truncate">
        {album.primaryArtists || "Various Artists"}
      </p>


    </div>
  );
};

export default AlbumCard;