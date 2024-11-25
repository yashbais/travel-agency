import React from 'react'
import CategoryCard from './CategoryCard'
import { servicesCard } from '../../../mock/mock'
import { motion } from 'framer-motion';
import { itemVariant, containerVariant, cardVariant } from '../../../styles/animationVariants'

const CategoryServices = () => {
    return (
        <div className='my-[97px] min-h-[525px]'>

            <img src="./GroupStars.svg" alt="" className=' absolute right-40 lg:block hidden' />
            <motion.div variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                className=' flex justify-center flex-col items-center gap-[10px]'>
                <motion.h6 variants={itemVariant} className='m-0 text-[#5E6282] font-poppins text-md sm:text-lg font-semibold'>CATEGORY</motion.h6>
                <motion.h3 variants={itemVariant} className='text-[#14183E] 
                m-0 font-volkhov font-bold text-xl sm:text-3xl lg:text-5xl
                sm:text-nowrap'>We Offer Best Services</motion.h3>
            </motion.div>

            <div
                className='mt-[68px] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 '>
                {
                    servicesCard.map((e, index) => {
                        return (
                            <motion.div key={index}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }} >

                                <CategoryCard {...e} />
                            </motion.div>
                        )
                    })

                }

            </div>


        </div>
    )
}

export default CategoryServices 