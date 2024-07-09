import { useEffect } from 'react';

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className='w-full h-fit min-h-screen bg-black text-white'>
      Profile Page
    </div>
    </div>
  )
}

export default ProfilePage
