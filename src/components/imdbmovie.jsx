import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Imdbmovie = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full h-fit'>
      <div className="bg-black rounded-xl flex flex-col md:flex-row shadow-md border-b-2 pb-6">
        <div className="w-full h-[200px] md:h-[400px] max-w-3xl mx-auto">
          <iframe
            src={`https://vidsrc.xyz/embed/movie/${id}`}
            title={`Movie ${id}`}
            className="w-full h-full rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Imdbmovie;