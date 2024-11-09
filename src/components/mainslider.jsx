import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Assume MovieList is imported or defined here
import { movieList } from "../MovieData";

const Mainslider = () => {
  const [currentMovie, setCurrentMovie] = useState(null);

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    return movieList[randomIndex];
  };

  useEffect(() => {
    setCurrentMovie(getRandomMovie());

    const timer = setInterval(() => {
      setCurrentMovie(getRandomMovie());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  if (!currentMovie) return null; // Or a loading state

  return (
    <div className="flex w-full h-auto md:h-auto justify-center bg-black">
      {/* Mobile view */}
      <div className="md:hidden w-full h-full relative">
        <Link to={`/player/${currentMovie.id}`} className="block w-full h-full">
          <img 
            src={currentMovie.poster} 
            alt={currentMovie.title} 
            className="w-full h-full object-cover"
          />
        </Link>
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-[-2px] p-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-16">
          <h1 className="text-2xl font-bold text-white ">{currentMovie.title}</h1>
          <p className="text-sm text-gray-400 mb-4">Genre: {currentMovie.genre}</p>
          <Link to={`/player/${currentMovie.id}`} className="inline-block">
            <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-2 px-4 font-bold rounded-lg text-base">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop view */}
      <div className="hidden md:flex w-full h-[400px] relative overflow-hidden">
        {/* Background image with blur */}
        <div className="absolute inset-0">
          <img 
            src={currentMovie.poster}
            alt={currentMovie.title}
            className="w-full h-full object-cover opacity-30 scale blur-md"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative w-full flex items-center justify-between px-12 py-8 z-10">
          {/* Left Content */}
          <div className="w-[70%] text-left flex flex-col justify-center space-y-6">
            <h1 className="text-6xl font-bold text-white tracking-tight">{currentMovie.title}</h1>
            <p className="text-lg text-gray-300 line-clamp-3 leading-relaxed font-light">{currentMovie.plot}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white">{currentMovie.runtime}</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white">{currentMovie.genre}</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white">{currentMovie.language}</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white">{currentMovie.released}</span>
              </div>
            </div>
            
            <Link to={`/player/${currentMovie.id}`} className="inline-block w-fit">
              <button className="group relative px-8 py-4 bg-red-600 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:bg-red-700">
                <span className="relative z-10">Watch Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Right Content - Poster */}
          <div className="w-[25%] h-[300px]">
            <div className="relative group">
              <img 
                src={currentMovie.poster} 
                alt={currentMovie.title} 
                className="w-full h-full object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_-4px_12px_rgba(0,0,0,0.4)] group-hover:shadow-none transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainslider;