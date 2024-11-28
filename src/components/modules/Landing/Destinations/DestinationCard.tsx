import { Icon } from '@iconify/react';
import React from 'react';
import { destinationCardTypes } from '../../../../types/types'

const DestinationCard = ({ amount, country, Image, Trip }: destinationCardTypes) => {
    return (
        <div className="mt-[60px]
         xl:h-[457px] xl:w-[315px]
       h-[370px] w-[250px]

     rounded-[20px] shadow-lg overflow-hidden bg-white relative">
            <img
                src={Image}
                alt="Destination"
                className="h-full w-full object-cover absolute top-0 left-0 z-0"
            />

            <div
                className="flex flex-col justify-center px-[20px] py-[15px] 
        text-[#5E6282] font-poppins text-sm md:text-[18px]
        font-normal absolute z-10 bg-white w-full bottom-0
        h-[130px]
        "
            >
                <div className="flex justify-between items-center mb-[10px] ">
                    <p className="text-[#5E6282] font-poppins font-normal text-sm md:text-[18px]">{country}</p>
                    <p className="text-[#5E6282] font-poppins font-normal text-sm md:text-[18px] ">{amount}</p>
                </div>

                <div className="flex items-center  gap-2 ">
                    <Icon
                        icon="mdi:navigation-variant"
                        className="w-5 h-5 text-black"
                    />
                    <p className="text-[#5E6282] font-poppins font-normal text-sm md:text-[16px] ">{Trip}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
