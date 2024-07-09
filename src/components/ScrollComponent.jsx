import { Link } from "react-router-dom";

const ScrollComponent = ({ movies, startIndex = 0, endIndex, headingTitle }) => {
  // If endIndex is not provided, use the length of the movies array
  const slicedMovies = movies.slice(startIndex, endIndex || movies.length);

  return (
    <div className="py-4">
      <div className="text-2xl text-white pb-2 pl-2">{headingTitle}</div>
      <div
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide "
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {slicedMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/player/${movie.id}`}
            className="flex-shrink-0 p-2 max-w-[130px] sm:max-w-[150px] hover:scale-110 transition-all"
          >
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <div className="pt-1">
              <h1 className="text-xs text-[#cfcfcf] max-h-[30px] md:max-h-[40px] overflow-hidden">{movie.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
