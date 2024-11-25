import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion';
import { containerVariant, cardVariant, itemVariant } from '../../../styles/animation/animationVariants'


const Footer = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariant}
                className='mt-[96px] grid grid-cols-12 gap-4'>
                <motion.div variants={cardVariant} className='col-span-12 lg:col-span-3 gap-[19px] flex flex-col w-full md:w-[207px]'>
                    <h3 className='m-0 text-[#181E4B] font-normal font-poppins text-[44px]'>Jadoo.</h3>
                    <p className='text-[#5E6282] text-[13px] font-poppins font-normal'>Book your trip in minute, get full control for much longer.</p>
                </motion.div>

                <motion.div variants={cardVariant} className='col-span-12 lg:col-span-6 grid grid-cols-3 gap-3 text-nowrap'>
                    <div className='flex flex-col gap-[34px]'>
                        <p className='text-[#080809] font-bold text-md sm:text-[21px] font-poppins'>Company</p>
                        <ul className='text-[#5E6282] font-poppins font-normal text-sm md:text-[18px] flex flex-col gap-[13px]'>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[34px]'>
                        <p className='text-[#080809] font-bold  text-md sm:text-[21px]  font-poppins'>Contact</p>
                        <ul className='text-[#5E6282] font-poppins font-normal text-sm md:text-[18px] flex flex-col gap-[13px]'>
                            <li>Help/FAQ</li>
                            <li>Press</li>
                            <li>Affilates</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[34px]'>
                        <p className='text-[#080809] font-bold  text-md sm:text-[21px]  font-poppins'>More</p>
                        <ul className='text-[#5E6282] font-poppins font-normal text-sm md:text-[18px] flex flex-col gap-[13px]'>
                            <li>Airlinefees</li>
                            <li>Airline</li>
                            <li>Low fare tips</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div variants={cardVariant} className='col-span-12 lg:col-span-3 flex flex-col gap-[30px]'>
                    <div className='flex justify-start gap-[25px]'>
                        <span className='p-[17px] rounded-full shadow-md'>
                            <Icon icon="ri:facebook-fill" width="1.2rem" height="1.2rem" style={{ color: "black" }} />
                        </span>
                        <span className='p-[17px] rounded-full shadow-md'>
                            <Icon icon="flowbite:instagram-solid" width="1.2rem" height="1.2rem" style={{ color: "black" }} />
                        </span>
                        <span className='p-[17px] rounded-full shadow-md'>
                            <Icon icon="ri:twitter-fill" width="1.2rem" height="1.2rem" style={{ color: "black" }} />
                        </span>
                    </div>
                    <p className='text-[#5E6282] text-[20px] font-poppins font-normal'>Discover our app</p>
                    <div className="flex justify-start gap-[7px]">
                        <button
                            className="flex items-center gap-[5px] bg-black w-[150px] h-[45px] rounded-[22.5px] px-4"
                        >
                            <Icon
                                icon="ion:logo-google-playstore"
                                width="1.5rem"
                                height="1.5rem"
                                style={{ color: "white" }}
                            />
                            <div className="text-left text-nowrap">
                                <p className="text-[10px] text-white font-normal leading-none">GET IT ON</p>
                                <p className="text-[14px] text-white font-bold leading-none">Google Play</p>
                            </div>
                        </button>

                        <button
                            className="flex items-center gap-[5px] bg-black w-[150px] h-[45px] rounded-[22.5px] px-4"
                        >
                            <Icon
                                icon="ic:round-apple"
                                width="1.5rem"
                                height="1.5rem"
                                style={{ color: "white" }}
                            />
                            <div className="text-left text-nowrap">
                                <p className="text-[10px] text-white font-normal leading-none">Available on the</p>
                                <p className="text-[14px] text-white font-bold leading-none">Apple Store</p>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariant}
                >

            <motion.p variants={itemVariant} className='text-center text-[#5E6282] text-[14px] font-normal font-poppins mt-[84px] mb-[79px]'>All rights reserved@jadoo.co</motion.p>
            </motion.div>
        </>
    )
}

export default Footer
