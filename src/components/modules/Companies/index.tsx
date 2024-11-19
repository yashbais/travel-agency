import React from 'react'
import { companiesImages } from '../../../mock/mock'
import { companiesImagesTypes } from '../../../types/types'

const Companies = () => {
  return (
    <div className='mt-[96px] grid md:gap-[77px] gap-2 place-items-center md:grid-cols-5 sm:grid-cols-2 grid-cols-1'>
      {companiesImages.map((e: companiesImagesTypes) => {
        return (
          <img src={e.companyImage} alt="" />
        )
      })}
    </div>
  )
}

export default Companies