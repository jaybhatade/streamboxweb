import './App.css';
import React,{ useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Loader from './components/Loader';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Navigation from './components/bottomNavigation';
import Home from './pages/Home';
import Premium from './pages/Premium';
import PlayerPage from './components/VideoSteaming';
import MoviePage from './pages/MoviePage';
import Chatbot from './pages/Chatbot';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/About';

// Layout component that includes the header and navigation
const Layout = () => {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  React.useEffect(() => {
    setProgress(100)
  }, [location])


  console.log('Rendering Layout');
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <main className="pb-16">
      <LoadingBar
        color='#B91C1C'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/player/:id", element: <PlayerPage /> },
      { path: "/premium", element: <Premium /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/movies", element: <MoviePage /> },
      { path: "/streamybot", element: <Chatbot/> },
      { path: "/search", element: <SearchPage/> },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('App component mounted');
    // Simulate an API call
    const simulateAPICall = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        console.log('Loading finished');
      } catch (error) {
        console.error('Failed to load resource:', error);
      }
    };

    simulateAPICall();
  }, []);

  console.log('Rendering App, isLoading:', isLoading);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
