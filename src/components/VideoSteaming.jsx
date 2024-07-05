import ReactPlayer from 'react-player';

const AttackOnTitanPlayer = () => {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Attack on Titan - Episode 1</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      <iframe
          src='https://vidsrc.xyz/embed/movie/tt10366206'
          width="100%"
          height="fit-content"
          allowFullScreen
          
        ></iframe>
        
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Note: This is for educational purposes only. Please support the official release.
      </p>
    </div>
  );
};

export default AttackOnTitanPlayer;