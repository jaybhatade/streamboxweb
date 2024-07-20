import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Profile = () => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out');
    }).catch((error) => {
      // An error happened.
      console.error('Error signing out: ', error);
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default Profile;
