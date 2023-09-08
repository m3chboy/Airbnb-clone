import { useState } from 'react'

export const Search = ({ setAnyWhere }) => {

    return (
        <div className='flex flex-row items-center justify-between px-2 py-2 border rounded-full shadow cursor-pointer hover:shadow-md text-[14px]'>
            <div className='flex flex-row items-center justify-between px-1 line-'>

                <p
                    className='px-3 py-2 text-[#222222] font-medium'
                    onClick={() => setAnyWhere(true)}
                >
                    Anywhere
                </p>
                <div className='border-l h-6'></div>
                <p
                    className='px-3 text-[#222222] font-medium'
                    onClick={() => setAnyWhere(true)}
                >
                    Any week
                </p>
                <div className='border-l h-6'></div>
                <p
                    className='px-3 text-[#717171]'
                    onClick={() => setAnyWhere(true)}
                >
                    Add guests
                </p>
            </div>
            <div className=' text-white primary-bg-clr py-2 px-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
        </div>
    )
}
