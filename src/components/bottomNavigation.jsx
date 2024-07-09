
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const getLinkStyle = (path) => (
        location.pathname === path ? "text-[#d41111]" : ""
    );

    return (
        <div>
            <div id="bottomNav" className="w-full h-fit bg-zinc-900 fixed bottom-0 py-4 rounded-t-lg z-50">
                <div className="flex h-full w-full justify-around items-center">
                    <Link to="/" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/")}`}>
                        <AiFillHome size={25} className={getLinkStyle("/")}/>
                        <h3 className="text-xs">Home</h3>
                    </Link>
                    <Link to="/movies" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/movies")}`}>
                        <MdLocalMovies size={25} className={getLinkStyle("/movies")}/>
                        <h3 className="text-xs">Movies</h3>
                    </Link>
                    <Link to="/premium" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/premium")}`}>
                        <FaCrown size={25} className={getLinkStyle("/premium")}/>
                        <h3 className="text-xs">Premium</h3>
                    </Link>
                    <Link to="/profile" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/profile")}`}>
                        <FaUser size={25} className={getLinkStyle("/profile")}/>
                        <h3 className="text-xs">Profile</h3>
                    </Link>
                    <Link to="/search" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/search")}`}>
                        <FaSearch size={25} className={getLinkStyle("/search")}/>
                        <h3 className="text-xs">Search</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
