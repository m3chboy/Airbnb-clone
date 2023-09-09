import React from 'react'
import { Link } from 'react-router-dom';

export const Filter = () => {
    const testArr = [
        { "name": "Beachfront", "icon": "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" },
        { "name": "OMG!", "icon": "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" },
        { "name": "Amazing views", "icon": "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" },
        { "name": "Earth homes", "icon": "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" },
        { "name": "Castles", "icon": "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" },
        { "name": "Amazing pools", "icon": "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" },
        { "name": "Forms", "icon": "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" },
        { "name": "Lakefront", "icon": "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" },
        { "name": "Rooms", "icon": "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" },
        { "name": "Countryside", "icon": "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" },
        { "name": "Cabins", "icon": "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" },
        { "name": "Trending", "icon": "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" },
        { "name": "Tiny homes", "icon": "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" },
        { "name": "Tropical", "icon": "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
        { "name": "Caves", "icon": "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
        { "name": "Luxe", "icon": "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
        { "name": "Camping", "icon": "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" },
        { "name": "Artic", "icon": "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" },
        { "name": "Islands", "icon": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" },
        { "name": "Minsus", "icon": "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg" },
    ]


    return (
        <div className="flex flex-col items-start py-1">

            <div
                className="flex hide-scroll-bar"
            >
                <div
                    className="flex flex-nowrap gap-0 mr-10"
                >
                    {testArr.map((filter) => (
                        <Link to="#" class="inline-block px-1 hell">
                            <div
                                className="flex flex-col items-center justify-between min-w-[85px] p-1 max-w-xs overflow-hidden rounded-lg leading-medium "
                            >
                                <img
                                    className='w-[24px] min-h-[23p] mb-1'
                                    src={filter.icon} alt="icon"
                                />
                                <p className='leading-normal text-[12px] font-medium text-[#717171] whitespace-nowrap filter-under-active relative'>{filter.name}</p>

                            </div>
                        </Link>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
