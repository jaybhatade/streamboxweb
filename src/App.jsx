import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/bottomNavigation';
import Home from './pages/Home';
import Player from './pages/Player';
import Premium from './pages/Premium';

// Layout component that includes the header and navigation
const Layout = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-black text-white">
      
      <main className="pb-16"> {/* Add padding to bottom to account for fixed navigation */}
        
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
  return <RouterProvider router={router} />;
}

export default App;