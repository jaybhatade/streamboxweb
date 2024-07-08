import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function HeaderTwo() {
  return (
    <div>
      <div
        id="header"
        className="w-full h-fit bg-black md:bg-zinc-900 p-3 sticky top-0 flex justify-center md:justify-between items-center px-4"
      >
        <Link to="/" className="hover:text-red-600 transition-all duration-300 ease-in-out">
          <IoMdArrowRoundBack size={30} />
        </Link>
        <img src="/images/MainLogo.png" className="w-[50vw] md:max-w-[150px]" />
      </div>
    </div>
  );
}

export default HeaderTwo;
