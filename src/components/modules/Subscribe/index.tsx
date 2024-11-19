import { Icon } from '@iconify/react'
import React from 'react'

const Subscribe = () => {
    return (
        <div className='mt-[124px] h-[407px] bg-[#DFD7F9] 
        rounded-tr-[20px] rounded-tl-[129px] rounded-br-[20px]
         rounded-bl-[20px] relative flex flex-col justify-evenly items-center'>

            <p className='font-poppins text-center
            lg:w-[881px] lg:h-[108px] 
             sm:w-[500px] h-[108px]
             w-[250px] 
             leading-[24px]
            font-semibold lg:text-[33px] md:text-2xl text-md md:leading-[54px] text-[#5E6282]'>Subscribe to get information, latest news and other
                interesting offers about Jadoo</p>

            <div className="flex gap-[24px] items-center md:flex-row  flex-col">
                <div className="relative">
                    <Icon
                        icon="mdi-light:email"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#39425D] text-[20px]"
                    />
                    <input
                        type="text"
                        placeholder="Your email"
                        className="
        text-[#39425D] font-montserrat font-normal text-[14px]
        md:h-[68px] md:w-[421px] rounded-[10px] pl-[48px] pr-[16px]
        h-[48px] sm:w-[321px] w-[201px]

        placeholder:text-[#39425D] placeholder:font-montserrat 
        placeholder:font-normal placeholder:text-[14px]
       
      "
                    />
                </div>
                <button
                    className="
      font-semibold font-sans md:text-[17px] md:h-[68px] md:w-[180px]
    text-md h-[50px] w-[160px]
      bg-custom-gradient rounded-[10px] text-[#FFFFFF]
    "
                >
                    Subscribe
                </button>
            </div>


            <img src="./sendIcon.svg" alt="" className='absolute -right-5 -top-5 z-10' />
            <img src="./leftSpiral.svg" alt="" className='absolute right-0 z-0 hidden md:block' />
            <img src="./centerSpiral.svg" alt="" className='absolute -left-20 bottom-0 hidden md:block' />

        </div>
    )
}

export default Subscribe