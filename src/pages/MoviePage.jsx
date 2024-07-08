import HeaderTwo from "../components/HeaderTwo";
import ScrollComponent from "../components/ScrollComponent";
import { movieList } from "../MovieData";

function MoviePage() {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <HeaderTwo />


    <ScrollComponent movies={movieList} startIndex={10} headingTitle={"Marvel Movies"}/>

    </div>
  );
}

export default MoviePage;
