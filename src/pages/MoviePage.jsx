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


    <ScrollComponent movies={movieList} startIndex={9} endIndex={20} headingTitle={"Marvel Movies"}/>

    <ScrollComponent movies={movieList} startIndex={20} endIndex={35} headingTitle={"Action Movies"}/>

    <ScrollComponent movies={movieList} startIndex={35} endIndex={47} headingTitle={"Bollywood Action Movies"}/>
      <ScrollComponent movies={movieList} startIndex={47} endIndex={58} headingTitle={"Bollywood Horror Movies"} />
      
      <ScrollComponent movies={movieList} startIndex={58} endIndex={70} headingTitle={"Horror Movies"} />
      
    <ScrollComponent movies={movieList} startIndex={70} endIndex={88} headingTitle={"Comedy Collection"}/>

    </div>
  );
}

export default MoviePage;
