import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';

import './react-calendar.css';

export const Calendardate = () => {

    const [value, setValue] = useState([]);

    async function onChange(nextValue, event) {
        var targetElement = event.target



        if (targetElement.nodeName.toLowerCase() === "abbr") {
            console.log('abbr')
            const parentElement = targetElement.parentNode;
            parentElement.style.backgroundColor = '#000';
            parentElement.style.color = '#fff';

        } else {
            console.log(targetElement.nodeName)
            targetElement.style.backgroundColor = '#000';
            targetElement.style.color = '#fff';
        }

        if (value.length < 2) {
            setValue([...value, nextValue])
        }
        else {
            setValue([])
        }

        if (value.length < 2) {

        } else {

            const buttons = document.querySelectorAll('.react-calendar__month-view__days__day');
            buttons.forEach(button => {
                button.style.backgroundColor = '#fff';
                button.style.color = '#000';
            });

            const neibuttons = document.querySelectorAll('.react-calendar__month-view__days__day--neighboringMonth');
            neibuttons.forEach(button => {
                button.style.color = '#fff';

            });

            // if (targetElement.nodeName.toLowerCase() === "abbr") {
            //     console.log('abbr')
            //     const parentElement = targetElement.parentNode;
            //     parentElement.style.backgroundColor = '#000';
            //     parentElement.style.color = '#fff';

            // } else {
            //     console.log(targetElement.nodeName)
            //     targetElement.style.backgroundColor = '#000';
            //     targetElement.style.color = '#fff';
            // }
        }
    }
    useEffect(() => {
        console.log(value)
        const neibuttons = document.querySelectorAll('.react-calendar__month-view__days__day--neighboringMonth');
        neibuttons.forEach(button => {
            // button.style.cursor = 'none';
            button.style.borderWidth = '0px';
            button.disabled = true
        });
    }, [value])

    return (
        <div className='leading-normal'>
            <div className='flex justify-between'>
                <div className='m-auto'>
                    <Calendar
                        onClickDay={onChange}
                        value={value}
                        showNeighboringMonth={false}
                        showDoubleView={true}
                        selectRange={true}
                    />
                </div>
            </div>
            <div className='flex flex-row text-[12px] gap-3 mt-2'>
                <button className={`border px-4 py-1 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}>Exact dates</button>
                <button className={`border px-4 py-1 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}><span className='pr-1'>+</span> 1 days</button>
                <button className={`border px-4 py-1 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}><span className='pr-1'>+</span> 2 days</button>
                <button className={`border px-4 py-1 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}><span className='pr-1'>+</span> 3 days</button>
                <button className={`border px-4 py-1 rounded-full leading-normal hover:border-black focus:border-2 focus:border-black`}><span className='pr-1'>+</span> 7 days</button>
            </div>
        </div>
    )
}
