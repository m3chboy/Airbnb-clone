import { useState } from 'react'

import { RegionBox } from './RegionBox.jsx';
import { Schedule } from './Schedule.jsx'
import { WhoBox } from './WhoBox.jsx';

export const BtSearch = ({ btnavRef }) => {
    const [searchActive, setSearchActive] = useState(0)
    return (
        <div ref={btnavRef} className={`m-auto mt-5 w-[65%] h-[64px] ${!searchActive ? "bg-white" : "bg-[#EBEBEB]"} border flex flex-row items-center justify-between rounded-full cursor-pointer dropdown-content relative`}>


            <div
                className={`flex flex-col h-full rounded-full w-[38%] px-7 py-3 relative ${searchActive === 1 ? "bt-search-hover" : " hover:bg-[#DDDDDD]"}`}
                onClick={() => setSearchActive(1)}
            >
                <p className='text-[12px] font-bold leading-normal'>Where</p>
                <input type="text" placeholder='Search destinations' className=' bg-transparent text-[14px] font-normal text-[#ACACAC] border-none outline-none' />
                {searchActive === 1 ? <RegionBox /> : null}
            </div>

            <div
                className={`flex flex-row items-center justify-between h-full rounded-full px-4 pl-6 py-3 w-[15%] ${searchActive === 2 ? "bt-search-hover" : " hover:bg-[#DDDDDD]"} `}
                onClick={() => setSearchActive(2)}
            >
                <div>
                    <p className='text-[12px] font-bold mb-5'>Check in</p>
                    <p className='text-[14px] font-normal text-[#ACACAC]'>Add dates</p>
                </div>
                <div className='rounded-full bg-[#DDDDDD] p-1 display-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {searchActive === 2 ? <Schedule /> : null}
            </div>

            <div
                className={`flex flex-row items-center justify-between h-full rounded-full px-4 pl-6 py-3 w-[15%] ${searchActive === 3 ? "bt-search-hover" : " hover:bg-[#DDDDDD]"}`}
                onClick={() => setSearchActive(3)}
            >
                <div>
                    <p className='text-[12px] font-bold mb-5'>Check out</p>
                    <p className='text-[14px] font-normal text-[#ACACAC]'>Add dates</p>
                </div>
                <div className='rounded-full bg-[#DDDDDD] p-1 display-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {searchActive === 3 ? <Schedule /> : null}
            </div>

            <div
                className={`flex flex-row justify-between h-full rounded-full px-2 pl-6 py-2 w-[30%] ${searchActive === 4 ? "bt-search-hover" : " hover:bg-[#DDDDDD]"} relative`}
                onClick={() => setSearchActive(4)}
            >
                <div className='flex flex-col py-1'>
                    <p className='text-[12px] font-bold mb-5 mt-2'>Who</p>
                    <p className='text-[14px] font-normal text-[#ACACAC]'>Add guests</p>
                </div>
                <div className='nav-inner-search-btn something-btn rounded-full px-5 py-6 flex flex-row items-center justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <p className='text-[14px] text-white font-medium leading-normal'>Search</p>
                </div>
                {searchActive === 4 ? <WhoBox /> : null}
            </div>
        </div>
    )
}
