

const Mainslider = () => {
  const banners = [
    {
      src: "/images/MainBanner2 (1).png",
      alt: "Ban1",
      title: "Jujutsu Kaisen Season 2",
      duration: "23 mins",
      studio: "Mappa",
      episodes:"23",
      discreption: "The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends. Exuding unshakeable confidence, Satoru Gojou and Suguru Getou believe there is no challenge too"
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
            <p className="hidden lg:block py-2" >Episodes: {banner.episodes}</p>
            <p className="hidden lg:block py-2" >Studio: {banner.studio}</p>
            </div>
            <a className="">
                <button className="bg-[#d41111] hover:bg-red-700 transition-all duration-300 text-white py-2 px-4 font-bold rounded-lg">
                    Watch Now
                </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainslider;