import AppLayout from "../components/layouts/AppLayout"
import Hero from '../components/modules/Landing/HeroSection'
import CategoryServices from '../components/modules/Landing/CategoryServices'
import Destinations from '../components/modules/Landing/Destinations'
import Companies from '../components/modules/Landing/Companies'
import Subscribe from '../components/modules/Landing/Subscribe'
import Footer from '../components/modules/Footer'
import Booking from '../components/modules/Landing/Booking'

const Landing = () => {
    return (
        <div >
            <div className="relative ">
                <img src="./Decore.svg" alt="" className="h-[42.53rem] w[38.89rem]
           absolute right-0 -top-12 hidden xl:block" />
            </div>

            <div className='flex flex-col gap-1'>
                <AppLayout >
                    <Hero />
                    <CategoryServices />
                    <Destinations />
                    <Booking />
                    <Companies />
                    <Subscribe />
                    <Footer />
                </AppLayout>
            </div>


        </div>
   
    )
}

export default Landing