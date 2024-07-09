import { useEffect } from 'react';
import HeaderTwo from "../components/HeaderTwo";

function Premium() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='w-full h-fit min-h-screen bg-black'>
            <HeaderTwo title={"Premium"} />
            <div className='pt-16 flex w-full justify-center p-4 z-10'> {/* Added padding-top */}
                <div className='w-fit h-fit items-center gap-8 flex-col rounded-lg p-4 flex'>
                    <img src="./images/offer1.png" alt="" className='w-[100%] max-w-[380px] relative left-[-5%] hover:scale-90 transition-all ease-in-out duration-300 z-[2]' />
                    <img src="./images/offer2.png" alt="" className='w-[100%] max-w-[350px] hover:scale-90 transition-all ease-in-out duration-300 z-[2]' />
                    <img src="./images/offer2 (1).png" alt="" className='w-[100%] max-w-[350px] hover:scale-90 transition-all ease-in-out duration-300 z-[2]' />
                </div>
            </div>
        </div>
    );
}

export default Premium;
