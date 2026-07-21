const Hero = () => {
  return (
    <section className="rounded-3xl overflow-hidden h-72 bg-gradient-to-r from-green-600 to-emerald-800 flex items-center px-10">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Feel Every Beat
        </h1>

        <p className="text-zinc-200 mt-4 max-w-xl text-lg">
          Discover trending songs, artists and albums.
        </p>

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
          Start Listening
        </button>
      </div>

    </section>
  );
};

export default Hero;