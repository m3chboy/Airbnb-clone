import { useState } from 'react';

import { Calendardate } from './Calendar';
import { MonthBar } from './MonthBar';
import { FlexDate } from './FlexDate';

export const Schedule = () => {
    const [showBtn, setShowBtn] = useState(1);

    return (
        <div className='absolute m-auto top-20 -right-[50px] border flex flex-col w-[850px] min-h-[450px] p-6 px-10 rounded-3xl bg-white air-shadow z-30 cursor-default'>
            <div className='min-w-[303px] m-auto mt-0 mb-0 px-[4px] bg-[rgb(235,235,235)] flex flex-row items-center justify-between rounded-full'>
                <p
                    className={`leading-[18px] cursor-pointer text-[14px] font-medium rounded-[100px] outline-none text-black px-[26px] py-[8px] my-[4px] hover:bg-white ${showBtn === 1 ? 'btn-shadow' : null}`}
                    onClick={() => setShowBtn(1)}
                >Dates</p>
                <p
                    className={`leading-[18px] cursor-pointer text-[14px] font-medium rounded-[100px] outline-none text-black px-[26px] py-[8px] my-[4px] hover:bg-white ${showBtn === 2 ? 'btn-shadow' : null}`}
                    onClick={() => setShowBtn(2)}
                >Months</p>
                <p
                    className={`leading-[18px] cursor-pointer text-[14px] font-medium rounded-[100px] outline-none text-black px-[26px] py-[8px] my-[4px] hover:bg-white ${showBtn === 3 ? 'btn-shadow' : null}`}
                    onClick={() => setShowBtn(3)}
                >Flexible</p>
            </div>
            {showBtn === 1 ? <Calendardate /> : null}
            {showBtn === 2 ? <MonthBar /> : null}
            {showBtn === 3 ? <FlexDate /> : null}
        </div>
    )
}
