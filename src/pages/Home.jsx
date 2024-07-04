
import ScrollComponent from "../components/ScrollComponent"

const movies =[
  { src: "https://static.aniwavetv.to/i/2019/05/f96bc7c7f41d0652b437068c88dcd1bc.jpg", alt: "imagebanner" },
  { src: "https://static.aniwavetv.to/i/2018/04/15858a826de711967c8e5a01ad246f64.jpg" },
  { src: "/images/JJK0.png", alt: "imagebanner" },
  { src: "/images/RTN.png", alt: "imagebanner" },
  { src: "/images/WB.png", alt: "imagebanner" },
];

function Home() {
  return (
    <div>
      <ScrollComponent movies={movies}/>
    </div>
  )
}

export default Home
