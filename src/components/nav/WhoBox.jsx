import { useState } from 'react';
import { Link } from 'react-router-dom';

export const WhoBox = () => {
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [pet, setPet] = useState(0);

    return (
        <div className='flex flex-col absolute min-w-[360px] min-h-[363px] py-2 px-8 rounded-3xl bg-white air-shadow z-30 cursor-default top-20 right-0'>
            <div className='flex flex-row items-center justify-between border-b py-5'>
                <div>
                    <h5 className='leading-normal text-[16px] font-semibold'>Adults</h5>
                    <p className='leading-normal text-[13px] font-normal text-gray-400'>Ages 13 or above</p>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <svg
                        onClick={() => setAdult(adult - 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className='leading-normal text-[13px] font-medium'>{adult > 0 ? adult : 0}</p>
                    <svg
                        onClick={() => setAdult(adult + 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
            <div className='flex flex-row items-center justify-between border-b py-5'>
                <div>
                    <h5 className='leading-normal text-[16px] font-semibold'>Children</h5>
                    <p className='leading-normal text-[13px] font-normal text-gray-400'>Ages 2–12

                    </p>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <svg
                        onClick={() => setChild(child - 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p


                        className='leading-normal text-[13px] font-medium'>{child > 0 ? child : 0}</p>
                    <svg
                        onClick={() => setChild(child + 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
            <div className='flex flex-row items-center justify-between border-b py-5'>
                <div>
                    <h5 className='leading-normal text-[16px] font-semibold'>Infants</h5>
                    <p className='leading-normal text-[13px] font-normal text-gray-400'>Under 2

                    </p>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <svg
                        onClick={() => setInfant(infant - 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className='leading-normal text-[13px] font-medium'>{infant > 0 ? infant : 0}</p>
                    <svg
                        onClick={() => setInfant(infant + 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
            <div className='flex flex-row items-center justify-between border-b py-5'>
                <div>
                    <h5 className='leading-normal text-[16px] font-semibold'>Pets</h5>
                    <Link to='/' className='leading-normal text-[13px] font-normal text-gray-400 underline'>Bringing a service animal?</Link>
                </div>
                <div
                    className='flex flex-row gap-2 items-center justify-center'>
                    <svg
                        onClick={() => setPet(pet - 1)}

                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className='leading-normal text-[13px] font-medium'>{pet > 0 ? pet : 0}</p>
                    <svg
                        onClick={() => setPet(pet + 1)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
