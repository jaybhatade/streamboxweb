import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import Heading from '../components/Header';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthPage = ({ isLogin }) => {
  const [user, loading, error] = useAuthState(auth);
  const [initializing, setInitializing] = useState(true);
  const [isWebView, setIsWebView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        setInitializing(false);
      }
    };

    initializeAuth();
    checkIfWebView();
  }, []);

  useEffect(() => {
    if (!loading && !initializing && user) {
      navigate('/');
    }
  }, [user, loading, initializing, navigate]);

  const checkIfWebView = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsWebView(/webview|wv|android.+chrome|crios/i.test(userAgent));
  };

  if (loading || initializing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-2xl">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <>
    <Heading />
    <div className="min-h-[90vh] bg-black flex flex-col lg:px-0">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-[10vh] text-center text-3xl font-extrabold text-white">
          {isLogin ? 'Log in to your account' : 'Create a new account'}
        </h2>
      </div>

      <div className="mt-8 mb-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-zinc-800 py-8 px-4 mx-4 shadow rounded-xl sm:rounded-2xl sm:px-10">
          {isLogin ? <LoginForm isWebView={isWebView} /> : <SignUpForm isWebView={isWebView} />}
        </div>
      </div>
    </div>
    </>
  );
};

const AuthForm = ({ isLogin, onSubmit, onGoogleSignIn, isWebView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await onSubmit(email, password);
    } catch (error) {
      setError(error.message.replace('Firebase: ', ''));
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
        {isLogin ? 'Enter password' : 'Set password'}
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
          {isLogin ? 'Log in' : 'Register Now'}
        </button>
      </div>

      {!isWebView && (
        <div>
          <button
            type="button"
            onClick={onGoogleSignIn}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <FaGoogle className="mr-2" />
            {isLogin ? 'Log in with Google' : 'Sign up with Google'}
          </button>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <div className="text-sm text-center mt-6">
        {isLogin ? (
          <Link to="/signup" className="font-medium text-red-700 hover:text-red-600">
            Don't have an account? Sign up
          </Link>
        ) : (
          <Link to="/login" className="font-medium text-red-700 hover:text-red-600">
            Already have an account? Log in
          </Link>
        )}
      </div>
    </form>
  );
};

const LoginForm = ({ isWebView }) => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} onGoogleSignIn={handleGoogleSignIn} isWebView={isWebView} />;
};

const SignUpForm = ({ isWebView }) => {
  const navigate = useNavigate();

  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return <AuthForm isLogin={false} onSubmit={handleSignUp} onGoogleSignIn={handleGoogleSignIn} isWebView={isWebView} />;
};

export default AuthPage;