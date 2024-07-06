import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'

function Premium() {
    return (
        <div className='w-full h-fit min-h-screen bg-black'>
            <div className='p-4'>
                <Link to="/"><IoMdArrowRoundBack size={35} /></Link>
            </div>
            <img src="" alt="" />
        </div>
    )
}

export default Premium