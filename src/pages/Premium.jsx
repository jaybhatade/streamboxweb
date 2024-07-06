import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'

function Premium() {
    return (
        <div className='w-full h-fit min-h-screen bg-black'>
            <div className='p-4'>
                <Link to="/"><IoMdArrowRoundBack size={35} /></Link>
            </div>
            <div className='flex w-full  justify-center p-4'>
                <div className='w-fit h-fit items-center gap-8  flex-col rounded-lg p-4 flex'>
                    <img src="./images/offer1.png" alt="" className='w-[100%] max-w-[380px] relative left-[-5%] hover:scale-90 transition-all ease-in-out duration-300' />
                    <img src="./images/offer2.png" alt="" className='w-[100%] max-w-[350px] hover:scale-90 transition-all ease-in-out duration-300' />
                    <img src="./images/offer2 (1).png" alt="" className='w-[100%] max-w-[350px] hover:scale-90 transition-all ease-in-out duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Premium