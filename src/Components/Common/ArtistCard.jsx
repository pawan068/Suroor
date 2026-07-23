const ArtistCard = ({ artist, onClick }) => {

  return (
    <div
      onClick={() => onClick(artist.id)}
      className="
      group 
      cursor-pointer 
      text-center
      "
    >

      <img
        src={artist.image}
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


      <h3 className="mt-4 font-semibold">
        {artist.name}
      </h3>


      <p className="text-zinc-400 text-sm">
        Artist
      </p>


    </div>
  );
};


export default ArtistCard;