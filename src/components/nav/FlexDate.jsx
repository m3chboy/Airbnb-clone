import React from 'react'
import { DateSlider } from './DateSlider';

export const FlexDate = () => {
    return (
        <div className='flex flex-col items-center justify-between '>
            <div className='text-center mt-10 '>
                <h3 className='leading-normal text-[18px] font-semibold'>How long would you like to stay?</h3>
                <div className='flex flex-row items-center justify-center m-auto text-[12px] font-light gap-2 mt-4 '>
                    <button className={`border px-6 py-2 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}>Weekend</button>
                    <button className={`border px-6 py-2 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}>Week</button>
                    <button className={`border px-6 py-2 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}>Month</button>

                </div>
                <h3 className='leading-normal text-[18px] font-semibold mt-10'>
                    When do you want to go?
                </h3>
            </div>
            <div className='mt-4 overflow-x-scroll w-full'>
                <DateSlider />
            </div>
        </div>
    )
}
