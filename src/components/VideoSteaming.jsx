
const VideoPlayer = () => {


  return (
    <div className="flex flex-col items-center md: md:justify-start min-h-screen p-8 bg-black">
      <h1 className="text-3xl font-bold mb-6 text-white">Spider-Man: No Way Home</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src='https://vidsrc.xyz/embed/movie/tt10872600'
          className="md:w-full h-[20vh] md:h-[400px] "
          allowFullScreen


        ></iframe>

      </div>
      <p className="mt-4 text-sm text-white">
        Note: This is for educational purposes only. Please support the official release.
      </p>
    </div>
  );
};

export default VideoPlayer;