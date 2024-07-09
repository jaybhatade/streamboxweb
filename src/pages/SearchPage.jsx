import { useEffect } from 'react';
function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className='w-full h-fit min-h-screen bg-black text-white'>
      Search Page
    </div>
    </div>
  )
}

export default SearchPage
