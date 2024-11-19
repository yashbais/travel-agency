import React from 'react'
import { servicesCardTypes } from '../../../types/types'

const CategoryCard = (
    { title, content, iconImage }: servicesCardTypes
) => {
    return (
        <div className='lg:relative'>
            <div className={`${title === "Best Flights" ? "min-h-[314px] xl:borderd xl:rounded-[36px] xl:shadow-lg bg-[#FFFFFF]" : ""}
     px-[44px] py-[45px] flex flex-col  items-center justify-center lg:absolute lg:z-10`}>

                <img src={iconImage} alt=""
                    className={`${title === "Best Flights" ? "h-[170px] w-[170px] -mt-[45px]" :
                        "h-[78px] w-[92px]"}  object-contain`}
                />
                <p className={`text-[#1E1D4C] font-sans text-xl font-semibold  
            text-nowrap ${title === "Best Flights" ? "-mt-[20px]" : "mt-[29px]"}`}>{title}</p>
                <p className='text-[#5E6282] text-center font-poppins text-[1rem] font-normal leading-[27px] mt-[15px] w-[181px]'>{content}</p>
            </div>

            <span className={`min-h-[100px] min-w-[100px] rounded-tl-[30px] 
        rounded-br-[10px] bg-[#DF6951]
        -left-[2.6rem] top-[16rem]  z-0 absolute
        ${title === "Best Flights" ? "xl:block hidden " : " hidden "}
        `}></span></div>



    )
}

export default CategoryCard