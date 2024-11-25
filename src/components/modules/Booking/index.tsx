import React from 'react'
import BookingCard from './BookingCard'
import { bookingCard } from '../../../mock/mock'
import BlurryEffect from '../../../assets/BlurryEffect.png'
import rome from '../../../assets/rome.png'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';
import { itemVariant, containerVariant,imageVariant } from '../../../styles/animation/animationVariants'


const Booking = () => {
    return (
        <motion.div variants={containerVariant}
        initial="hidden"
        whileInView="visible"
         className='xl:mx-[4.625rem] mt-[186px] grid lg:grid-cols-12 gap-10 md:gap-1 grid-cols-1' >
            <div className='lg:col-span-7 grid md:place-items-start place-items-center '>
                <motion.p variants={itemVariant} className='text-[#5E6282] font-poppins font-semibold text-lg leading-7'>Easy and Fast</motion.p>
                <motion.p variants={itemVariant} className='mt-[15px] font-volkhov font-bold  text-2xl md:text-[50px] text-[#14183E] md:w-[511px] md:leading-[64.5px]'>Book your next trip
                    in 3 easy steps</motion.p>

                <div className='mt-[31px] flex flex-col md:gap-[48px] gap-[30px]'>
                    {bookingCard.map((e) => {
                        return (
                            <motion.div variants={itemVariant}>
                                <BookingCard {...e} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <div className='lg:col-span-5 relative  min-h-[520px] lg:min-h-full grid place-items-center '>
                <motion.img variants={imageVariant} src={BlurryEffect} alt="" className='min-w-[554px] min-h-[567px] hidden lg:block lg:absolute lg:-right-20 lg:-top-28  ' />
                <motion.div variants={imageVariant} className=' lg:min-w-[370px] min-h-[400px] rounded-[24px] shadow-md absolute z-10 bg-[#FFFFFF]  lg:right-28 lg:top-16 flex flex-col gap-[26px] px-[25px] py-[20px] items-center'>
                    <img src={rome} alt="" />

                    <div className=' w-full justify-between  '>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='text-[#080809] font-poppins font-medium text-sm md:text-lg'>Trip To Greece</p>
                            <div className='text-[#84829A] flex  text-sm md:text-[16px] font-poppins font-medium gap-1'>
                                <p >14-29 June</p>
                                <span className="h-[16px] min-w-[2px] bg-[#84829A] md:block hidden"></span>
                                <p>by Robbin joseph</p>
                            </div>
                        </div>
                        <div className='flex  gap-[18px] mt-[21px]'>
                            <div className='bg-[#F5F5F5] p-3 rounded-full'><Icon icon="mdi:leaf" width="1.2rem" height="1.2rem" style={{ color: "#84829A" }} /></div>
                            <div className='bg-[#F5F5F5] p-3  rounded-full'><Icon icon="tabler:map" width="1.2rem" height="1.2rem" style={{ color: "#84829A" }} /></div>
                            <div className='bg-[#F5F5F5] p-3  rounded-full'><Icon icon="mynaui:send-solid" width="1.2rem" height="1.2rem" style={{ color: "#84829A" }} /></div>
                        </div>
                        <div className='flex justify-between items-center mt-[29px]'>
                            <div className='flex gap-[15px]'>
                                <Icon icon="pixelarticons:buildings" width="1.2rem" height="1.2rem" style={{ color: "#84829A" }} />

                                <p className='font-poppins font-medium text-sm md:text-[16px] text-[#84829A]'>24 people going</p>
                            </div>
                            <Icon icon="system-uicons:heart" style={{ color: "#4152CA" }} className='h-7 w-7' />
                        </div>
                    </div>

                </motion.div>

                <motion.div variants={imageVariant} className='min-w-[263px] min-h-[129px] rounded-[18px]  shadow-md bg-[#FFFFFF] absolute z-10 lg:bottom-[6.7rem] lg:right-[0rem] bottom-[7rem] right-[6.4rem] md:block hidden' >
                    <div className='flex gap-4 pt-[17px] px-[17px]'>
                        <img src="./image32.svg" alt="" className='rounded-full ' />
                        <div><p className='font-poppins font-normal text-[14px] text-[#84829A]'>Ongoing</p>
                            <p className='font-poppins font-normal text-lg text-[#080809]'>Trip to rome</p></div></div>
                    <div>

                    </div>
                    <div className='flex flex-col justify-center items-center mt-[14px]'>
                        <p className='font-poppins font-normal text-[14px]'><span className='text-[#8A79DF]'>40%</span> completed</p>
                        <div className='flex mt-[10px] ml-[50px]'>
                            <div className=' bg-[#8A79DF] min-h-[5px] min-w-[73px] rounded-md'></div>
                            <div className='bg-[#F5F5F5] min-h-[5px] min-w-[83px] rounded-md'></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Booking