import { useEffect } from 'react';
import Search from '../components/Search'
import HeaderTwo from '../components/HeaderTwo';


function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className='w-full h-fit min-h-screen bg-black text-white justify-center items-start flex'>
        <HeaderTwo title={"Search Movies"}/>
      
      <Search/>
    </div>
    </div>
  )
}

export default SearchPage
