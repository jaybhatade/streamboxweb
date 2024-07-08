import { Link } from "react-router-dom";

const ScrollComponent = ({ movies, startIndex = 0, endIndex, headingTitle }) => {
  // If endIndex is not provided, use the length of the movies array
  const slicedMovies = movies.slice(startIndex, endIndex || movies.length);

  return (
    <div>
      <div>
        <div className="text-2xl text-white pt-4 pb-1 px-4">{headingTitle}</div>
        <div
          className="flex h-fit overflow-y-auto px-2 md:flex-wrap"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {slicedMovies.map((movie) => (
            <Link 
              key={movie.id}
              to={`/player/${movie.id}`}
              className="flex flex-col p-2 max-w-[150px] hover:scale-110 transition-all">

              <img
                src={movie.posterURL}
                alt={movie.title}
                className="w-[30vw] md:w-[150px] h-full md:h-[200px]  rounded-lg shadow-md object-cover"
              />
              <div>
                <h1 className="text-xs text-[#cfcfcf] pt-1 max-h-[40px] overflow-hidden">{movie.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;