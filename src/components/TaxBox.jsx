import React from 'react';


export const TaxBox = () => {
    return (
        <div className='flex flex-row items-center justify-between w-[43%] m-auto border border-[#dddddd] rounded-lg px-4 py-4'>
            <h3 className='leading-normal text-[14px] text-black font-semibold'>Display total price <span className='leading-normal text-[14px] text-[#717171] font-normal border-l ml-3 pl-3 '>Includes all fees, before taxes
            </span></h3>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>

            </label>
        </div>
    )
}
