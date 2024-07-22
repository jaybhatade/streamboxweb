import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import Heading from '../components/Header';
import { auth, googleProvider } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  getRedirectResult
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// Function to detect if the app is running in a WebView
const isWebView = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.includes('wv') || // Android WebView
    userAgent.includes('fb') || // Facebook in-app browser
    (userAgent.includes('android') && userAgent.includes('version/')) || // Old Android browser
    (userAgent.includes('iphone') && !userAgent.includes('safari')) // iOS WebView
  );
};

// Function to open URL in browser
const openInBrowser = (url) => {
  if (window.ReactNativeWebView) {
    // For React Native WebView
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'openBrowser', url }));
  } else if (isWebView()) {
    // For other WebViews
    window.open(url, '_system');
  } else {
    // For regular web browsers
    window.open(url, '_blank');
  }
};

const AuthPage = ({ isLogin }) => {
  const [user, loading, error] = useAuthState(auth);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          navigate('/');
        }
      } catch (error) {
        console.error("Error after redirect:", error);
      } finally {
        setInitializing(false);
      }
    };

    checkRedirectResult();
  }, [navigate]);

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading || initializing) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-red-500 text-2xl">Error: {error.message}</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col lg:px-0">
      <Heading />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          {isLogin ? 'Log in to your account' : 'Create a new account'}
        </h2>
      </div>

      <div className="mt-8 mb-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-zinc-800 py-8 px-4 mx-4 shadow rounded-xl sm:rounded-2xl sm:px-10">
          {isLogin ? <Login /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};


const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error.message.replace('Firebase: ', ''));
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      if (isWebView()) {
        const authUrl = `https://streambox-70a34.firebaseapp.com/__/auth/handler?provider=google&redirect=${encodeURIComponent(window.location.origin)}`;
        openInBrowser(authUrl);
      } else {
        await signInWithPopup(auth, googleProvider);
        navigate('/');
      }
    } catch (error) {
      setError(error.message.replace('Firebase: ', ''));
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSignUp}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email address
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="bg-zinc-700 focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-600 rounded-md text-white h-10"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="bg-zinc-700 focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-600 rounded-md text-white h-10"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Register Now
        </button>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-zinc-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-zinc-700 text-sm font-medium text-gray-300 hover:bg-zinc-600"
          >
            <FaGoogle className="h-5 w-5 text-red-600 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <div className="text-sm text-center mt-6">
        <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
          Already have an account? Log in
        </Link>
      </div>
    </form>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      if (isWebView()) {
        const authUrl = `https://streambox-70a34.firebaseapp.com/__/auth/handler?provider=google&redirect=${encodeURIComponent(window.location.origin)}`;
        openInBrowser(authUrl);
      } else {
        await signInWithPopup(auth, googleProvider);
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email address
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="bg-zinc-700 focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-600 rounded-md text-white h-10"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="bg-zinc-700 focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-600 rounded-md text-white h-10"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Log in
        </button>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-zinc-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-zinc-700 text-sm font-medium text-gray-300 hover:bg-zinc-600"
          >
            <FaGoogle className="h-5 w-5 text-red-600 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <div className="text-sm text-center mt-6">
        <Link to="/signup" className="font-medium text-red-600 hover:text-red-500">
          Don't have an account? Sign up
        </Link>
      </div>
    </form>
  );
};

export default AuthPage;