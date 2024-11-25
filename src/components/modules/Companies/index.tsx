import React from 'react'
import { companiesImages } from '../../../mock/mock'
import { companiesImagesTypes } from '../../../types/types'
import { motion } from 'framer-motion';
import { containerVariant, cardVariant } from '../../../styles/animationVariants'


const Companies = () => {
  return (

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
        className='mt-[96px] grid md:gap-[77px] gap-2 place-items-center md:grid-cols-5 sm:grid-cols-2 grid-cols-1'>
     
      {companiesImages.map((e: companiesImagesTypes) => {
        return (
          <motion.div variants={cardVariant}>
            <img src={e.companyImage} alt="" />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Companies