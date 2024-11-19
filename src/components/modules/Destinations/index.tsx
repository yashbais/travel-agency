import React from 'react'
import DestinationCard from '../Destinations/DestinationCard'
import { destinationCard } from '../../../mock/mock'

const Destinations = () => {
    return (
        <div className='min-h-[617px] mt-[123px] relative ' >
            <div className='lg:absolute lg:z-10'>
                <div className=' flex justify-center flex-col items-center gap-[10px] '>
                    <h6 className='m-0 text-[#5E6282] font-poppins text-md sm:text-lg font-semibold'>Top Selling</h6>
                    <h3 className='text-[#14183E] m-0 font-volkhov font-bold text-xl sm:text-3xl lg:text-5xl'>Top Destinations</h3>
                </div>

                <div className=' grid md:grid-cols-3 grid-cols-1 gap-[35px] lg:px-20 px-2 place-items-center'>
                    {
                        destinationCard.map((e) => {
                            return (
                                <DestinationCard {...e} />
                            )
                        })

                    }

                </div>

            </div>

            <img src="./spring.svg" alt="" className='hidden xl:block absolute right-9 bottom-16 ' />
        </div>
    )
}

export default Destinations