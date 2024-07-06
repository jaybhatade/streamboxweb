import { Link } from "react-router-dom"


function Navigation() {
    return (
        <div>
            <div id="bottomNav" className="w-full h-fit bg-zinc-900 fixed bottom-0 py-4 rounded-t-lg">
                <div className="flex h-full w-full justify-around items-center">
                    <Link to="/" className="flex flex-col gap-1 items-center justify-between hover:text-red-700">
                        <img src="/images/home (4).png" className="w-6 " />
                        <h3 className=" text-xs ">Home</h3>
                    </Link>
                    <Link to="/player" className="flex flex-col gap-1 items-center justify-between hover:text-red-700">
                        <img src="/images/moviesicon.png" className="w-6" />
                        <h3 className="text-xs">Movies</h3>
                    </Link>
                    <a href="#" className="flex flex-col gap-1 item items-center justify-between hover:text-red-700">
                        <img src="/images/premiumicon.png" className="w-6" />
                        <h3 className="text-xs">Premium</h3>
                    </a>
                    <a href="#" className="flex flex-col gap-1 items-center justify-between hover:text-red-700">
                        <img src="/images/profileicon.png" className="w-6" />
                        <h3 className="text-xs">Profile</h3>
                    </a>
                    <a href="#" className="flex flex-col gap-1 items-center justify-between hover:text-red-700">
                        <img src="/images/settingsicon.png" className="w-6" />
                        <h3 className="text-xs">Setting</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
