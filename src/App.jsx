import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/bottomNavigation';
import Home from './pages/Home';
import Player from './pages/Player';
import Premium from './pages/Premium';

// Layout component that includes the header and navigation
const Layout = () => {
  console.log('Rendering Layout');
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      <main className="pb-16">
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
      { path: "/player/:id", element: <Player /> },
      { path: "premium", element: <Premium /> },
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
