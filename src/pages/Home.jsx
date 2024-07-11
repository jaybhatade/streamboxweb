import { useEffect } from 'react';
import Heading from '../components/Header'
import Mainslider from "../components/mainslider";
import ScrollComponent from "../components/ScrollComponent";
import { movieList, series} from '../MovieData';



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <header>
        <Heading/>
      </header>
      

      <Mainslider />
    <ScrollComponent movies={movieList} startIndex={35} endIndex={47} headingTitle={"Bollywood Action Movies"}/>

      <ScrollComponent movies={movieList} headingTitle={"Trending Anime Movies"}/>
      <ScrollComponent movies={series} headingTitle={"Trending Anime Movies"}/>
      <ScrollComponent movies={movieList} startIndex={3} endIndex={6} headingTitle={"Latest Anime Movie"} />
      {/* <div className="w-full bg-red-300 h-[10vh] mt-8 flex justify-center items-center ">
        @StreamBox by Jay Bhatade
      </div> */}
    </div>
  );
}

export default Home;
