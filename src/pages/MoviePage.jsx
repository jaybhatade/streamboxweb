import { useEffect } from 'react';
import HeaderTwo from "../components/HeaderTwo";
import ScrollComponent from "../components/ScrollComponent";
import { movieList } from "../MovieData";

function MoviePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white pt-20">
      <HeaderTwo title={"Movies Section"} />


    <ScrollComponent movies={movieList} startIndex={10} headingTitle={"Marvel Movies"}/>

    </div>
  );
}

export default MoviePage;
