import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FaUser, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Profile = ({ name, email, imageUrl }) => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center mb-4">
          {imageUrl ? (
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={imageUrl}
              alt={`${name}'s profile picture`}
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <FaEnvelope className="mr-2" />
            <span>{email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;