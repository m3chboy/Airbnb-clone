import { useState } from 'react';
import { CircleSlider } from "react-circle-slider";
import './circle.css';

// import CircularSlider from '@fseehawer/react-circular-slider';


export const MonthBar = () => {
    const [value, setValue] = useState(1)
    return (
        <div className=' flex flex-col items-center justify-center m-auto leading-normal relative'>
            <p className='mt-5 mb-2 leading-normal text-[18px] text-[#000000] font-semibold'>When's your trip?
            </p>

            <CircleSlider
                value={value}
                size={350}
                knobRadius={20}
                progressWidth={45}
                circleWidth={40}
                progressColor="#6AB6E1"
                showTooltip={true}
                tooltipSize={42}
                tooltipColor="#000"
                gradientColorFrom="#FEA346"
                gradientColorTo="#F8616D"
                min={0}
                max={12}

            />
            <p className='absolute leading-normal text-[22px] text-[#000000] font-semibold bottom-[110px]'>months</p>
        </div>
    )
}
