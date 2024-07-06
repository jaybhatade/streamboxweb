import { Link } from "react-router-dom";


const Mainslider = () => {
  const banners = [
    {
      src: "https://images7.alphacoders.com/132/1322340.jpg",
      alt: "Ban1",
      title: "Spider-Man: No Way Home",
      duration: "148 min",
      studio: "Marvel & Sony",
      director: "Jon Watts",
      discreption: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
    }


  ];

  return (
    <div className="flex w-full h-fit justify-center">

      {banners.map((banner) => (
        <div key={banner.src} className="w-full justify-between flex flex-col p-4 md:p-8 md:flex-row-reverse rounded-lg">
          <img src={banner.src} alt={banner.alt} className=" w-full object-cover  md:w-[55%] md:ml-4 rounded-xl" />
          <div className="text-left flex items-center justify-between md:flex-col  md:items-start mt-4">
            <div className="w-[60%] md:w-full h-fit">
              <h1 className=" md:w-full text-lg md:text-2xl lg:text-4xl">{banner.title}</h1>
              <p className="hidden md:block py-4 md:text-xs lg:text-lg" >{banner.discreption}</p>
              <p className="hidden lg:block py-2" >Duration: {banner.duration}</p>
              <p className="hidden lg:block py-2" >Director: {banner.director}</p>
              <p className="hidden lg:block py-2" >Studio: {banner.studio}</p>
            </div>
            <Link to="/player" className="">
              <button className="bg-[#d41111] hover:bg-red-700 transition-all duration-300 text-white py-2 px-4 font-bold rounded-lg">
                Watch Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainslider;