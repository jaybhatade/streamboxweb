import Mainslider from "../components/mainslider";
import ScrollComponent from "../components/ScrollComponent";

const movies = [
  {
    src: "https://static.aniwavetv.to/i/2019/05/f96bc7c7f41d0652b437068c88dcd1bc.jpg",
    alt: "imagebanner",
    title: "Weathering With You",
    cateagory: "Movie"
  },
  {
    src: "https://static.aniwavetv.to/i/2018/04/15858a826de711967c8e5a01ad246f64.jpg",
    alt: "imagebanner",
    title: "Garden of Words"
  },
  {
    src: "https://static.aniwavetv.to/i/5/5a/5a20094d4032f171e9bfd2e2e2d9cdf5.jpg",
    alt: "imagebanner",
    title: "Demon Slayer: Sibling's Bond",
    cateagory: "Movie"
  },
  {
    src: "https://static.aniwavetv.to/i/5/56/5680065f3e0d43e7dfde62fcb0dd1eef.jpg",
    alt: "imagebanner",
    title: "Movies 2024",
    cateagory: "Movie"
  },
  {
    src: "https://static.aniwavetv.to/i/1/11/f8afece6eff312ce165e22779b894708.jpg",
    alt: "imagebanner",
    title: "Movies 2024",
    cateagory: "Movie"
  },
  {
    src: "https://static.aniwavetv.to/i/0/01/016aafbf1f73381e0f91ee3f45b267d1.jpg",
    alt: "imagebanner",
    title: "Movies 2024",
    cateagory: "Movie"
  },
];

const series = [
  {
    src: "https://static.aniwavetv.to/i/2019/05/f96bc7c7f41d0652b437068c88dcd1bc.jpg",
    alt: "imagebanner",
    title: "Series 2024",
    cateagory: "Series"
  },
  {
    src: "https://static.aniwavetv.to/i/2018/04/15858a826de711967c8e5a01ad246f64.jpg",
    alt: "imagebanner",
    title: "Series 2024",
    cateagory: "Series"
  },
  {
    src: "https://static.aniwavetv.to/i/5/5a/5a20094d4032f171e9bfd2e2e2d9cdf5.jpg",
    alt: "imagebanner",
    title: "Series 2024",
    cateagory: "Series"
  },
  {
    src: "https://static.aniwavetv.to/i/5/56/5680065f3e0d43e7dfde62fcb0dd1eef.jpg",
    alt: "imagebanner",
    title: "Series 2024",
    cateagory: "Series"
  },
  {
    src: "https://static.aniwavetv.to/i/1/11/f8afece6eff312ce165e22779b894708.jpg",
    alt: "imagebanner",
    title: "Series 2024",
    cateagory: "Series"
  },
];

function Home() {
  return (
    <div>
      <Mainslider/>
      <ScrollComponent movies={movies} />
      <ScrollComponent movies={series} />
      <ScrollComponent movies={movies} />
      {/* <div className="w-full bg-red-300 h-[10vh] mt-8 flex justify-center items-center ">
        @StreamBox by Jay Bhatade
      </div> */}
    </div>
  );
}

export default Home;
