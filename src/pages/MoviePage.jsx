import { animeMovies } from "../MovieData";
import { Link } from "react-router-dom";

function MoviePage() {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <div>
        <div>
          <div className="text-2xl text-white pt-4 pb-1 px-4">
            Trending Anime Movies
          </div>
          <div
<<<<<<< HEAD
            className="flex w-full h-fit px-2 flex-wrap justify-items-stretch"
            >
            {animeMovies.map((movie) => (
=======
            className="flex w-full h-fit px-2 flex-wrap"
          >
            {movies.map((movie) => (
>>>>>>> 3f94d44119f3f28f749fa5b474dc6efe9d0fa3a3
              <Link
                key={movie.id}
                to={`/player/${movie.id}`}
                className=" flex flex-col p-2 rounded-xl max-w-[170px] hover:scale-110 transition-all"
              >
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="w-[30vw] h-full md:w-[150px] md:h-[220px] rounded-xl shadow-md object-cover"
                />
                <div>
                  {/* <h1 className="text-sm text-[#cfcfcf] pt-1 max-h-[40px] overflow-hidden">
                    {movie.title}..
                  </h1> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
