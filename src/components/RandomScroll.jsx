import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ScrollComponent = ({ movies, count = 10, headingTitle }) => {
  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    const getRandomMovies = () => {
      const shuffled = [...movies].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    setRandomMovies(getRandomMovies());
  }, [movies, count]);

  return (
    <div className="py-4">
      <div className="text-2xl text-white pl-2">{headingTitle}</div>
      <div
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide py-2"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {randomMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/player/${movie.id}`}
            className="flex-shrink-0 p-2 w-[130px] sm:w-[150px]  hover:scale-110 transition-all ease-in-out duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[170px] md:h-[200px] rounded-lg shadow-md object-cover"
            />
            <div className="pt-1">
              <h1 className="text-xs text-[#cfcfcf] line-clamp-2 overflow-hidden">{movie.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;