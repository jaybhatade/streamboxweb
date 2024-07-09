

const MoviePlayer = ({ movie }) => {
  return (
    <div className="bg-black  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-white">{movie.title}</h2>
      <div className="w-full h-[400px] max-w-3xl mx-auto">
        <iframe
          src={`https://vidsrc.xyz/embed/movie/${movie.id}`}
          title={movie.title}
          className="w-full h-full rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;