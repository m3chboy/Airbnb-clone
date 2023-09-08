import React from 'react';
import { Link } from 'react-router-dom';

export const ClickCenter = () => {
    return (
        <div className='text-[14px] text-[#3f3f3f] font-normal'>
            <Link to="#" className='relative mx-4 nav-under hover:text-gray-400 nav-under-active'>Stays</Link>
            <Link to="#" className='relative mx-4 nav-under hover:text-gray-400'>Experience</Link>
            <Link to="#" className='relative mx-4 nav-under hover:text-gray-400'>Online Experience</Link>
        </div>
    )
}
