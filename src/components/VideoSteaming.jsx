import { useParams, Link } from 'react-router-dom';
import MoviePlayer from './MoviePlayer';
import { movieList } from '../MovieData';

const PlayerPage = () => {
  const { id } = useParams();
  
  console.log('URL ID:', id);
  console.log('Movie List:', movieList);

  const movie = movieList.find(movie => movie.id === id);

  console.log('Found Movie:', movie);

  if (!movie) {
    return (
      <div className="p-4">
        <Link to="/" className="text-red-600 hover:underline mb-4 inline-block">&larr; Back to Movies</Link>
        <h2 className="text-xl font-bold mb-4">Movie not found</h2>
        <p>Debug Information:</p>
        <ul className="list-disc pl-5">
          <li>URL ID: {id}</li>
          <li>Number of movies in list: {movieList.length}</li>
          <li>Movie IDs in list: {movieList.map(m => m.id).join(', ')}</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link to="/" className="text-red-600 hover:underline mb-4 inline-block">&larr; Back to Movies</Link>
      <MoviePlayer movie={movie} />
    </div>
  );
};

export default PlayerPage;