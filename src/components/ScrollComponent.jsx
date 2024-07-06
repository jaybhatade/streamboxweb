const ScrollComponent = ({ movies }) => {
  return (
    <div>
      <div>
        <div className="text-2xl text-white pt-4 pb-1 px-4">Trending Movies</div>
        <div
          className="flex h-fit overflow-y-auto  px-2 md:flex-wrap"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {movies.map((movie) => (
            <div key={movie} className=" flex flex-col p-2 rounded-xl max-w-[170px]">

              <img
                key={movie.src}
                src={movie.src}
                alt={movie.alt}
                className="w-[30vw] h-full max-w-[150px] rounded-xl shadow-md object-cover"
              />
              <div>
                <h1 className="text-sm text-[#cfcfcf] pt-1 max-h-[20px] overflow-hidden">{movie.title}..</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;