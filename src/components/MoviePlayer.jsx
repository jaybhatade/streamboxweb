

const MoviePlayer = ({ movie }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-white">{movie.title}</h2>
      <p className="mb-4 text-White">{movie.description}</p>
      <div className="w-full h-[400px] max-w-3xl mx-auto">
        <iframe
          src={movie.vidUrl}
          title={movie.title}
          className="w-full h-full rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;