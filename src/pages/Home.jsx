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

      <ScrollComponent movies={movieList} startIndex={67} endIndex={88} headingTitle={"Comedy Collection"}/>
      <RandomScroll movies={movieList} count={15} headingTitle={"Recommended For You"}/>

      <ScrollComponent movies={movieList} startIndex={20} endIndex={35} headingTitle={"Action Movies"} />
      
      <ScrollComponent movies={movieList} startIndex={46} endIndex={56} headingTitle={"Bollywood Horror Movies"} />
      {/* <div className="w-full bg-red-300 h-[10vh] mt-8 flex justify-center items-center ">
        @StreamBox by Jay Bhatade
      </div> */}
    </div>
  );
}

export default Home;
