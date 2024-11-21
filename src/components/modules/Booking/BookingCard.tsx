import React from 'react'
import {bookingCardTypes} from '../../../types/types'

const BookingCard = ({title,content,iconImage}:bookingCardTypes) => {
  return (
    <div className='flex gap-[21px]'>
      <div><img src={iconImage} alt="" /></div>
      <div className='flex flex-col  gap-[2px] md:w-[327px]'>
        <p className='text-[#5E6282] font-bold md:text-[16px] text-sm font-poppins'>{title}</p>
        <p className='text-[#5E6282] font-medium md:text-[16px] text-sm  font-poppins'>{content}</p>
      </div>
    </div>
  )
}

export default BookingCard