import React, { useState, useEffect, useRef } from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [premiumClicks, setPremiumClicks] = useState(0);
    const clickTimerRef = useRef(null);

    const getLinkStyle = (path) => (
        location.pathname === path ? "text-[#d41111]" : ""
    );

    useEffect(() => {
        if (premiumClicks === 7) {
            navigate('/about');
            setPremiumClicks(0);
        }

        // Reset clicks if no click within 1 second
        clickTimerRef.current = setTimeout(() => {
            setPremiumClicks(0);
        }, 1000);

        return () => {
            if (clickTimerRef.current) {
                clearTimeout(clickTimerRef.current);
            }
        };
    }, [premiumClicks, navigate]);

    const handlePremiumClick = (e) => {
        e.preventDefault();
        setPremiumClicks(prev => prev + 1);

        if (clickTimerRef.current) {
            clearTimeout(clickTimerRef.current);
        }

        if (premiumClicks === 6) {
            // This will be the 7th click, so we'll handle it in the useEffect
        } else {
            // Normal behavior: navigate to premium page
            navigate('/profile');
        }
    };

    return (
        <div>
            <div id="bottomNav" className="w-full h-fit bg-zinc-900 fixed bottom-0 py-4 rounded-t-lg z-50">
                <div className="flex h-full w-full justify-around items-center">
                    <Link to="/" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/")}`}>
                        <AiFillHome size={25} className={getLinkStyle("/")} />
                        <h3 className="text-xs">Home</h3>
                    </Link>
                    <Link to="/movies" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/movies")}`}>
                        <MdLocalMovies size={25} className={getLinkStyle("/movies")} />
                        <h3 className="text-xs">Movies</h3>
                    </Link>
                    <Link to="/streamybot" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/streamybot")}`}>
                        <BsStars size={25} className={getLinkStyle("/streamybot")}/>
                        <h3 className="text-xs">Ask AI</h3>
                    </Link>
                    <Link to="/search" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/search")}`}>
                        <FaSearch size={25} className={getLinkStyle("/search")} />
                        <h3 className="text-xs">Search</h3>
                    </Link>
                    <Link to="/profile" className={`flex flex-col gap-1 items-center justify-between hover:text-[#d41111] transition-all duration-200 ease-in-out ${getLinkStyle("/profile")}`} onClick={handlePremiumClick}>
                        <FaUser size={25} className={getLinkStyle("/profile")} />
                        <h3 className="text-xs">Profile</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;