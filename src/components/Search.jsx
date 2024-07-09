import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { movieList } from '../MovieData';
import { debounce } from 'lodash-es';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = useCallback((searchQuery) => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery === '') {
      setFilteredMovies([]);
    } else {
      const filtered = movieList.filter((movie) =>
        movie.title.toLowerCase().includes(trimmedQuery)
      );
      setFilteredMovies(filtered);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      filterMovies(searchQuery);
    }, 300),
    [filterMovies]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    debouncedSearch(inputValue);
  };

  return (
    <div className="container mx-auto my-4 px-4 pt-16">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie"
        className="w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {filteredMovies.map((movie) => (
          <Link
            to={`/player/${movie.id}`}
            key={movie.id}
            className="block"
          >
            <div className=" rounded-lg shadow-md overflow-hidden h-full">
              <div className="p-2">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-56 md:h-40 lg:h-56 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-center  line-clamp-2">{movie.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;