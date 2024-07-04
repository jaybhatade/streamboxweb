const ScrollComponent = ({ movies}) => {
    return (
      <div>
        <div>
          <div className="text-2xl text-white py-4 px-4">Trending Movies</div>
          <div
            className="flex h-fit overflow-y-auto gap-3 px-4"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {movies.map((movie) => (
              <img
                key={movie.src}
                src={movie.src}
                alt={movie.alt}
                className="w-[35vw] max-w-[150px] rounded-xl shadow-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ScrollComponent;