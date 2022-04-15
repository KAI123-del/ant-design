import React from 'react';
import '../index.css'

function Header() {
    return (
        //   ============HEADER BEGINS HERE ===================  //

        <div className='lg:flex lg:px-24 lg:pt-4  px-8  justify-between items-center pb-4 border-t-2 shadow-lg border-gray-400'>

            {/* ========Left section ====== */}

            <div className='lg:text-2xl text-cyan-800 font-Inter font-bold'>ATools<span className='text-2xl text-orange-400 font-bold'>.</span></div>

            {/* ========Right section========= */}

            <div className='lg:flex justify-center items-center hidden  w-1/4 space-x-4'>
                <button className=' py-2 w-1/2 border bg-cyan-900 rounded text-white font-Inter'>Start Free Trial</button>
                <button className=' py-2 border rounded w-1/2 text-white font-Inter bg-amber-500'>Login</button>
            </div>

        </div>
    )
}

export default Header