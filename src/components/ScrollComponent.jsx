import { Link } from "react-router-dom";

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
            <Link 
              key={movie.id}
              to={`/player/${movie.id}`}
              className=" flex flex-col p-2 rounded-xl max-w-[170px] hover:scale-110 transition-all">

              <img
                src={movie.posterURL}
                alt={movie.title}
                className="w-[30vw] h-full max-w-[150px] rounded-xl shadow-md object-cover"
              />
              <div>
                <h1 className="text-sm text-[#cfcfcf] pt-1 max-h-[20px] overflow-hidden">{movie.title}..</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;