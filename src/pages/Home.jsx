import Heading from '../components/Header'
import Mainslider from "../components/mainslider";
import ScrollComponent from "../components/ScrollComponent";
import { movieList, series} from '../MovieData';



function Home() {
  return (
    <div>
      <header>
        <Heading/>
      </header>
      

      <Mainslider />
      <ScrollComponent movies={movieList} />
      <ScrollComponent movies={series} />
      <ScrollComponent movies={movieList} />
      {/* <div className="w-full bg-red-300 h-[10vh] mt-8 flex justify-center items-center ">
        @StreamBox by Jay Bhatade
      </div> */}
    </div>
  );
}

export default Home;
