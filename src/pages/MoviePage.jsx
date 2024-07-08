import ScrollComponent from "../components/ScrollComponent";
import { movieList } from "../MovieData";

function MoviePage() {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
    <ScrollComponent movies={movieList} startIndex={3} endIndex={6} headingTitle={"Trending Anime Movies"}/>
    </div>
  );
}

export default MoviePage;
