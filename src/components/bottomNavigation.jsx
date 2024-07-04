

function Navigation() {
  return (
    <div>
      <div id="bottomNav" className="w-full h-fit bg-black fixed bottom-0 p-4">
            <div className="flex h-full w-full justify-around items-center">
                <div className="flex flex-col gap-2 items-center justify-between hover:text-red-700">
                    <img src="/images/home (4).png" className="w-7 "/>
                    <h3 className=" text-md ">Home</h3>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between hover:text-red-700">
                    <img src="/images/moviesicon.png" className="w-8"/>
                    <h3 className="text-md">Movies</h3>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between hover:text-red-700">
                    <img src="/images/premiumicon.png" className="w-8"/>
                    <h3 className="text-md">Premium</h3>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between hover:text-red-700">
                    <img src="/images/profileicon.png" className="w-8"/>
                    <h3 className="text-md">Profile</h3>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between hover:text-red-700">
                    <img src="/images/settingsicon.png" className="w-7"/>
                    <h3 className="text-md">Setting</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation
