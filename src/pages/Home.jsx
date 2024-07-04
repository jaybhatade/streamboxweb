
import ScrollComponent from "../components/ScrollComponent"

const movies =[
  { src: "https://static.aniwavetv.to/i/2019/05/f96bc7c7f41d0652b437068c88dcd1bc.jpg", alt: "imagebanner" },
  { src: "https://static.aniwavetv.to/i/2018/04/15858a826de711967c8e5a01ad246f64.jpg", alt:"imagebanner"},
  { src: "https://static.aniwavetv.to/i/5/5a/5a20094d4032f171e9bfd2e2e2d9cdf5.jpg", alt: "imagebanner" },
  { src: "https://static.aniwavetv.to/i/5/56/5680065f3e0d43e7dfde62fcb0dd1eef.jpg", alt: "imagebanner" },
  { src: "https://static.aniwavetv.to/i/1/11/f8afece6eff312ce165e22779b894708.jpg", alt: "imagebanner" },
];

function Home() {
  return (
    <div>
      <ScrollComponent movies={movies}/>
      <ScrollComponent movies={movies}/>

    </div>
  )
}

export default Home
