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
    <div className="flex w-full h-[500px] md:h-[600px] justify-center bg-black">
      {/* Mobile view */}
      <div className="md:hidden w-full h-full relative">
        <Link to={`/player/${currentMovie.id}`} className="block w-full h-full">
          <img 
            src={currentMovie.poster} 
            alt={currentMovie.title} 
            className="w-full h-full object-cover"
          />
        </Link>
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
      <div className="hidden md:flex w-full max-w-7xl flex-row-reverse items-center justify-between p-8 rounded-lg">
        <div className="w-[30%] h-full flex items-center justify-center">
          <img 
            src={currentMovie.poster} 
            alt={currentMovie.title} 
            className="w-full h-[90%] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-[60%] text-left flex flex-col justify-center pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{currentMovie.title}</h1>
          <p className="text-base lg:text-lg text-gray-300 mb-4 line-clamp-4">{currentMovie.plot}</p>
          <p className="text-sm text-gray-400 mb-2">Runtime: {currentMovie.runtime}</p>
          <p className="text-sm text-gray-400 mb-2">Genre: {currentMovie.genre}</p>
          <p className="text-sm text-gray-400 mb-2">Language: {currentMovie.language}</p>
          <p className="text-sm text-gray-400 mb-4">Released: {currentMovie.released}</p>
          <Link to={`/player/${currentMovie.id}`} className="inline-block">
            <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 px-6 font-bold rounded-lg text-lg">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mainslider;