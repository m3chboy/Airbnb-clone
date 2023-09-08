import React from 'react'

export const DateSlider = () => {
    const testArr = ["September", "October", "November", "December", "January", "Febraury", "March", "April", "May", "June", "July", "August",]


    return (
        <div class="flex flex-col items-start py-1">

            <div
                class="flex hide-scroll-bar"
            >
                <div
                    class="flex flex-nowrap"
                >
                    {testArr.map((month) => (
                        <div class="inline-block px-3">
                            <div
                                class="flex flex-col items-center justify-center w-28 h-32 max-w-xs overflow-hidden rounded-lg leading-normal border hover:border-black focus:border-2 focus:border-black "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#222222] mb-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <p className='leading-normal text-[14px] font-medium'>{month}</p>
                                <p className='leading-normal text-[12px]'>2023</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
