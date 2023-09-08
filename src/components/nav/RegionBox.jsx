import React from 'react';

import flexible from '../../assets/region/flexible.jpg'
import europe from '../../assets/region/europe.webp'
import asia from '../../assets/region/asia.webp'
import indo from '../../assets/region/indonesia.webp'
import uk from '../../assets/region/uk.webp'
import us from '../../assets/region/us.webp'


export const RegionBox = () => {
    return (
        <div className='absolute top-20 left-0 border flex flex-col w-[478px] h-[466px] p-6 px-10 rounded-3xl bg-white air-shadow z-30 cursor-default'>
            <p className='leading-normal text-[14px] font-bold pt-5 pb-0'>Search by region</p>
            <div className='flex flex-row flex-wrap items-center justify-between'>
                <div className='w-[122px] h-[122px] mb-5 mt-8 '>
                    <img src={flexible} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>I'm flexible</p>
                </div>
                <div className='w-[122px] h-[122px] mb-5 mt-8'>
                    <img src={europe} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>Europe</p>
                </div>
                <div className='w-[122px] h-[122px] mb-5 mt-8'>
                    <img src={uk} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>United Kingdom</p>
                </div>
                <div className='w-[122px] h-[122px] mb-5 mt-8'>
                    <img src={asia} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>South Asia</p>
                </div>
                <div className='w-[122px] h-[122px] mb-5 mt-8'>
                    <img src={indo} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>Indonesia</p>
                </div>
                <div className='w-[122px] h-[122px] mb-5 mt-8'>
                    <img src={us} alt="flexible" className='rounded-xl border hover:border hover:border-black cursor-pointer' />
                    <p className='leading-normal text-[14px] font-normal mt-2 px-2'>United States</p>
                </div>

            </div>
        </div>
    )
}
