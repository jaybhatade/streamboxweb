import { useState,useEffect } from 'react';
import ScrollComponent from './ScrollComponent';
import RandomScroll from './RandomScroll'
import { movieList } from '../MovieData';


const MoviePlayer = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full h-fit'>
    <div className="bg-black rounded-xl flex flex-col md:flex-row shadow-md border-b-2 pb-6">
      <div className="w-full h-[200px] md:h-[400px] max-w-3xl mx-auto">
        <iframe
          src={`https://vidsrc.xyz/embed/movie/${movie.id}`}
          title={movie.title}
          className="w-full h-full rounded-lg shadow-md"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col justify-center md:justify-between items-center  w-full md:w-[40%]">
      <div className="p-2 pb-4">
        <h2 className="text-2xl font-bold text-white pt-3 md:pt-0 pb-1">{movie.title}</h2>
        <div className="relative">
          <p
            className={`text-gray-300 mt-1 ${
              isExpanded ? '' : 'line-clamp-3 md:line-clamp-2'
            }`}
          >
            {movie.plot}
          </p>
          {!isExpanded && (
            <div className="absolute bottom-0 right-0 bg-gradient-to-l from-black to-transparent w-full h-6" />
          )}
        </div>
        <button
          onClick={toggleExpand}
          className="text-red-600 hover:text-red-400 mt-1 focus:outline-none"
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>
      <div className='w-full h-fit'>
      <p className='pl-2 text-gray-300'>
        Genre : {movie.genre || "--"}
      </p>
      <p className='pl-2 text-gray-300'>
        Released : {movie.released || "--"}
      </p>
      <div className='flex justify-between'>
      <p className='pl-2 text-gray-300'>
        Language : {movie.language || "--"}
      </p>
      <p className='pr-2 lg:pr-6 text-gray-300'>
        Runtime : {movie.runtime || "--"}
      </p>
      </div>
      </div>
      </div>
    </div>


    <RandomScroll movies={movieList} count={15} headingTitle={"Recommended For You"}/>

    <ScrollComponent movies={movieList} startIndex={20} endIndex={35} headingTitle={"Action Movies"}/>

    <ScrollComponent movies={movieList} startIndex={47} endIndex={60} headingTitle={"Bollywood Horror Movies"}/>
    </div>
  );
};

export default MoviePlayer;