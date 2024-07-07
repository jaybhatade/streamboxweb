import VideoPlayer from "../components/VideoSteaming"


function Player() {
  const movie = [
    {
      title:'Spider-Man: No Way Home',
      id: 'tt0468569',

    },

  ]
  return (
    <div>
      
      
      <VideoPlayer movies={movie}/>


    </div>
  )
}

export default Player
