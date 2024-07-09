import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function HeaderTwo({ title }) {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        id="header"
        className="w-full h-fit bg-black border-b-[1px] border-white md:bg-zinc-900 py-4 fixed top-0 flex justify-between items-center px-2 z-50"
      >
        <button 
          onClick={() => navigate(-1)} 
          className="hover:text-red-600 transition-all duration-300 ease-in-out"
        >
          <IoMdArrowRoundBack size={30} />
        </button>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
    </div>
  );
}

export default HeaderTwo;
