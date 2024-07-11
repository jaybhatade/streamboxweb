import { useEffect } from 'react';
import Heading from '../components/Header'
import Mainslider from "../components/mainslider";
import ScrollComponent from "../components/ScrollComponent";
import { movieList, series} from '../MovieData';
import RandomScroll from '../components/RandomScroll'



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

      <ScrollComponent movies={movieList} startIndex={0} endIndex={9} headingTitle={"Trending Anime Movies"}/>
      <RandomScroll movies={movieList} count={15} headingTitle={"Recommended For You"}/>

      <ScrollComponent movies={movieList} startIndex={47} endIndex={60} headingTitle={"Bollywood Horror Movies"}/>
      {/* <div className="w-full bg-red-300 h-[10vh] mt-8 flex justify-center items-center ">
        @StreamBox by Jay Bhatade
      </div> */}
    </div>
  );
}

export default Home;
