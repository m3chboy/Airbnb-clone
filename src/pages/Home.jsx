import { useEffect, useState } from 'react';

import { Filter } from '../components/Filter';
import { TaxBox } from '../components/TaxBox';
import { HomeCard } from '../components/HomeCard';
import { FooterTop } from '../components/footer/FooterTop';
import { FooterBottom } from '../components/footer/FooterBottom';
import { cardData } from '../assets/carddata';

export const Home = () => {

    useEffect(() => {
        const fixFilter = document.getElementById('filter');
        const fixNav = document.getElementById('navbar');

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 10) {

                fixFilter.classList.add('shadow-lg')

            } else {
                // fixFilter.style.position = 'inline-block';
                // fixNav.style.position = 'inline-block';
                // fixFilter.style.top = '0';
                fixFilter.classList.remove('shadow-lg')
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='hide-scrollbar max-w-[1380px] relative pt-2' id='homebro'>
            {/* filter  */}
            <div className={`flex flex-row items-start justify-between px-8 overflow-hidden sticky top-[5rem] gap-2 w-[100vw] bg-white z-10 `} id='filter'>
                <div className='w-full overflow-x-scroll'>
                    <Filter />

                </div>
                <button className='leading-normal border mt-3 flex flex-row gap-2 rounded-lg px-4 py-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <span className='leading-normal text-[13px] font-medium'>
                        Filter
                    </span>
                </button>
                <button className='absolute leading-normal left-3 py-3 px-2 display-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 leading-normal border rounded-full p-1 pr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className='absolute leading-normal right-[7.5rem] py-5 px-2 pl-5 bg-white rotate-180 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 leading-normal border rounded-full p-1 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

            </div>
            {/* tax box */}
            <TaxBox />
            {/* Home container */}

            <div className='px-8 mt-5 mb-10 flex flex-col items-center justify-center w-[100vw]'>
                <div className='w-full flex flex-row flex-wrap justify-between'>
                    {cardData.map((data) =>
                        <HomeCard
                            id={data.id}
                            name={data.name}
                            image={data.image}
                            bed={data.bed}
                            amount={data.amount}
                            star={data.star}
                        />)
                    }

                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='leading-normal text-[16px] text-black font-semibold mb-3'>Continue exploring beachfront homes</h3>
                    <button className='leading-normal text-[16px] font-semibold text-white py-2 px-4 rounded-md bg-black'>Show more</button>
                </div>
            </div>

            {/* footer */}
            <div className='w-[100vw] bg-[#F7F7F7]' id='thisisfooter'>
                <FooterTop />
                <div className='w-full border-b mt-7'></div>
                <FooterBottom />
            </div>
        </div>
    )
}
