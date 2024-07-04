import './App.css';
import Navigation from './components/bottomNavigation';
import Heading from './components/Header';
import Home from './pages/Home'

function App() {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <header>
        <Heading />
      </header>
      
      
      <Home/>

      <Navigation />
    </div>
  );
}

export default App;