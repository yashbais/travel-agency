import React from 'react'
import DestinationCard from './DestinationCard'
import { destinationCard } from '../../../../mock/mock'
import { motion } from 'framer-motion';
import { itemVariant, containerVariant, cardVariant } from '../../../../styles/animation/animationVariants'


const Destinations = () => {
    return (
        <motion.div variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className='min-h-[617px] mt-[123px] relative ' >
            <div className='lg:absolute lg:z-10'>
                <div className=' flex justify-center flex-col items-center gap-[10px] '>
                    <motion.h6 variants={itemVariant} className='m-0 text-[#5E6282] font-poppins text-md sm:text-lg font-semibold'>Top Selling</motion.h6>
                    <motion.h3 variants={itemVariant} className='text-[#14183E] m-0 font-volkhov font-bold text-xl sm:text-3xl lg:text-5xl'>Top Destinations</motion.h3>
                </div>

                <div className=' grid md:grid-cols-3 grid-cols-1 gap-[35px] lg:px-20 px-2 place-items-center'>
                    {
                        destinationCard.map((e, index) => {
                            return (
                                <motion.div key={index}
                                    variants={cardVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}>

                                    <DestinationCard {...e} />
                                </motion.div>
                            )
                        })

                    }

                </div>

            </div>

            <motion.img variants={itemVariant} src="./spring.svg" alt="" className='hidden xl:block absolute right-[4rem] bottom-16 ' />
        </motion.div>
    )
}

export default Destinations