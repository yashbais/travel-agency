import React from 'react'
import CategoryCard from './CategoryCard'
import { servicesCard } from '../../../mock/mock'

const CategoryServices = () => {
    return (
        <div className='my-[97px] min-h-[525px]'>

            <img src="./GroupStars.svg" alt="" className=' absolute right-40 lg:block hidden' />
            <div className=' flex justify-center flex-col items-center gap-[10px]'>
                <h6 className='m-0 text-[#5E6282] font-poppins text-md sm:text-lg font-semibold'>CATEGORY</h6>
                <h3 className='text-[#14183E] 
                m-0 font-volkhov font-bold text-xl sm:text-3xl lg:text-5xl
                sm:text-nowrap'>We Offer Best Services</h3>
            </div>

            <div className='mt-[68px] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 '>
                {
                    servicesCard.map((e) => {
                        return (
                            <CategoryCard {...e}/>
                        )
                    })

                }

            </div>
            

        </div>
    )
}

export default CategoryServices 