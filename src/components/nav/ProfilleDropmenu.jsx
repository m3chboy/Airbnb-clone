import { useState, useEffect, useRef } from 'react';

export const ProfilleDropmenu = ({ profiledrop, setProfileDrop }) => {
    const dropdownRef = useRef(null);
    const [preventClose, setPreventClose] = useState(false);



    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (preventClose && !dropdownRef.current.contains(e.target)) {
                console.log(profiledrop, 'drop')
                setProfileDrop(false);
            } else {
                setPreventClose(!preventClose)
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [preventClose]);

    return (
        <div className='absolute flex flex-row flex-wrap w-60 top-12 rounded-[12px] bg-white air-shadow border-[#dddddd] text-[14px] text-[#222222] font-normal py-2 z-30' ref={dropdownRef}>
            <p className='w-full font-medium p-5 pb-5 cursor-pointer hover:bg-gray-50'>Sign up</p>
            <p className='w-full p-5 cursor-pointer hover:bg-gray-50'>Log in</p>
            <div className='w-full border-b pt-3 mb-3'></div>
            <p className='w-full p-5 pb-5 pt-5 cursor-pointer hover:bg-gray-50'>Airbnb your home</p>
            <p className='w-full p-5 cursor-pointer hover:bg-gray-50'>Help Center</p>
        </div>
    )
}
