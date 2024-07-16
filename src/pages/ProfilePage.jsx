import { useEffect } from 'react';
import Chat from '../components/Chat';

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className='w-full h-fit min-h-screen bg-black text-white'>
      <Chat/>
    </div>
    </div>
  )
}

export default ProfilePage
