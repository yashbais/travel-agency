import React from 'react'
import NavLayout from "../components/layouts/NavLayout"
import AppLayout from "../components/layouts/AppLayout"
import Navbar from '../components/modules/Navbar/index'
import Hero from '../components/modules/HeroSection/index'
import CategoryServices from '../components/modules/CategoryServices/index'
import Destinations from '../components/modules/Destinations/index'
import Companies from '../components/modules/Companies/index'
import Subscribe from '../components/modules/Subscribe/index'

const Landing = () => {
    return (
        <div>
            <div className="relative ">
                <NavLayout >
                    <Navbar />
                </NavLayout>

                <img src="./Decore.svg" alt="" className="h-[42.53rem] w[38.89rem]
           absolute right-0 -top-12 hidden xl:block" />
            </div>

            <div className='flex flex-col gap-1'>
                <AppLayout >
                    <Hero />
                    <CategoryServices />
                    <Destinations />
                    <Companies />
                    <Subscribe />
                </AppLayout>
            </div>


        </div>
    )
}

export default Landing