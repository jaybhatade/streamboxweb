import './App.css';
import Navigation from './components/bottomNavigation';
import Heading from './components/Header';
import VideoStreaming from './components/VideoSteaming';
import Home from './pages/Home'

function App() {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <header>
        <Heading />
      </header>
      
      <VideoStreaming/>
      
      <Home/>

      <Navigation />
    </div>
  );
}

export default App;