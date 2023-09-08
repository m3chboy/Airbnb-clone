import React from 'react'
import { Link } from 'react-router-dom';

export const FooterTop = () => {

    const testArr = [
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
        {
            first: "Canmore",
            second: "Flat rentals"
        },
    ]
    return (
        <div className='px-8 w-full flex flex-col items-start pt-10'>
            <h3 className='leading-normal text-[22px] text-[#222222] font-medium mb-1'>Inspiration for future getaways</h3>
            <div className=' w-full text-[14px] font-medium flex flex-row items-start gap-6 border-b'>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Popular</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Things to do</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Popular</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Popular</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Things to do</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Popular</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Things to do</button>
                <button className='leading-normal text-[#717171] focus:text-[#222222] relative footer-top py-3'>Things to do</button>
            </div>
            <div className='flex flex-row items-start justify-self-auto flex-wrap pt-7'>
                {testArr.map((data) => (
                    <Link className='w-[196px] text-left pb-7'>
                        <p className='mb-1 text-[#222222] font-medium text-[14px]'>Canmore</p>
                        <p className='leading-normal text-[#717171] font-normal text-[14px]'>Flat rentals</p>
                    </Link>
                ))}

                <button className='w-[196px] text-left pb-7'>
                    <p className='mb-1 text-[#222222] font-medium text-[14px] flex flex-row items-center hover:underline'>Show more <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </span>
                    </p>


                </button>

            </div>
        </div>
    )
}
