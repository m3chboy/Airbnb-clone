import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCard = ({ id, name, image, bed, amount, star }) => {
    return (
        <div className='max-w-[280px] max-h-[365px] mb-10' key={id}>
            <div className='min-h-[270px] w-full relative card-img'>
                <img
                    className='w-full min-h-[270px] object-cover rounded-xl'
                    src={image} alt="image"
                />
                <div className='absolute bg-black/5 w-full h-full top-0 rounded-xl'></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(0,0,0,0.5)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-white top-3 right-3 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                <button className='absolute leading-normal right-3 top-28 rotate-180 bg-white rounded-full slider-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 leading-normal border rounded-full p-1 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className='absolute w-10 bottom-5 right-[50%] translate-x-[50%] items-center flex flex-row gap-1'>
                    <div className='w-[5px] h-[6px] bg-white rounded-full'></div>
                    <div className='w-[5px] h-[6px] bg-gray-50/80 rounded-full'></div>
                    <div className='w-[5px] h-[6px] bg-white/70 rounded-full'></div>
                    <div className='w-[5px] h-[6px] bg-white/50 rounded-full'></div>
                    <div className='w-[4px] h-[4px] bg-white/50 rounded-full'></div>
                </div>

            </div>
            <Link className='flex flex-row items-start justify-between mt-3'>
                <div className='flex flex-col'>

                    <h5 className='leading-normal text-[14px] text-black font-semibold mb-2'>{name}</h5>
                    <p className=' text-[14px] text-[#717171] font-normal '>{bed} beds</p>
                    <p className='leading-normal text-[14px] underline mt-3'><span className='text-[14px] text-black font-semibold'>{amount}</span> total before taxes</p>
                </div>
                <p className='leading-normal flex flex-row gap-1 text-[14px]'>
                    <span className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </span>
                    {star}
                </p>
            </Link>
        </div>
    )
}
