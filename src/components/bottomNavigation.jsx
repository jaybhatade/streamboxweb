import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom"


function Navigation() {
    return (
        <div>
            <div id="bottomNav" className="w-full h-fit bg-zinc-900 fixed bottom-0 py-4 rounded-t-lg">
                <div className="flex h-full w-full justify-around items-center">
                    <Link to="/" className="flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out">
                        <AiFillHome size={25}/>
                        <h3 className=" text-xs ">Home</h3>
                    </Link>
                    <Link to="/movies" className="flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out">
                        <MdLocalMovies size={25}/>
                        <h3 className="text-xs">Movies</h3>
                    </Link>
                    <Link to="/premium" href="#" className="flex flex-col gap-1 item items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out">
                        <FaCrown size={25}/>
                        <h3 className="text-xs">Premium</h3>
                    </Link>
                    <Link to="/profile" className="flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out">
                    <FaUser size={25}/>
                        <h3 className="text-xs">Profile</h3>
                    </Link>
                    <Link to="/search" className="flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out">
                    <FaSearch size={25}/>
                        <h3 className="text-xs">Search</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
