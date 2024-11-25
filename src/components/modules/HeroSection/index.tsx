import Traveller from '../../../assets/Traveller.png';
import { motion } from 'framer-motion';
import {itemVariant ,containerVariant,diagonalItemVariant} from '../../../styles/animationVariants'

const Hero = () => {

    return (
        <div className="flex justify-center items-center flex-col lg:flex-row relative">
            <motion.div  variants={containerVariant}
            initial="hidden"
            whileInView="visible" className="w-full lg:w-1/2 h-full relative flex flex-col gap-[1.5rem]">
                <motion.p    variants={itemVariant} className='font-poppins font-bold text-[#DF6951] sm:text-xl text-[1rem]  sm:text-nowrap '>Best Destinations around the world</motion.p>
               

                <motion.p    variants={itemVariant} className='text-[#181E4B] font-bold font-volkhov
                 text-[3.25rem] leading-[3.56rem] lg:text-[5.25rem] 
                 lg:leading-[5.56rem] relative z-10'>
                    Travel, enjoy
                    and live a new
                    and full life</motion.p>

                    <motion.img
                    variants={itemVariant}
                    src="./Decore-1.svg"
                    alt=""
                    className="absolute z-0 lg:-right-8 
                    lg:top-32 -right-20 top-[6.2rem]
                     hidden md:block 
                     
                     "
                />

                <motion.p    variants={itemVariant}  className='font-poppins text-[#5E6282] font-normal text-[1rem] leading-[1.87rem]
                 md:w-[29.81rem]
                 
                 '>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</motion.p>

                <motion.div
                variants={itemVariant} className='flex gap-[0.75rem] md:gap-[2.75rem] sm:justify-start md:items-start  justify-between items-center sm:flex-row flex-col '>
                    <motion.button
                    variants={itemVariant} className='bg-[#F1A501] text-[#FFFFFF] px-[1.6rem] rounded-lg sm:text-xl py-[1.18rem] text-nowrap'>Find out more</motion.button>
                    <motion.img
                    variants={itemVariant} src="./PlayDemo.svg" alt="" className='md:-mt-3 mt-8' />
                </motion.div>
            </motion.div>

            <motion.div 
             initial="hidden"
             whileInView="visible"
              variants={containerVariant} className="w-full lg:w-1/2 h-full flex justify-center items-center relative ">
                <motion.img
                    variants={diagonalItemVariant}
                    src="./plane.svg"
                    alt=""
                    className="absolute left-16 top-8  z-0  hidden md:block"
                />

                <motion.img
                    variants={itemVariant}
                    src={Traveller}
                    alt=""
                    className="relative z-10  -left-4 "
                />

                <motion.img
                    variants={diagonalItemVariant}
                    src="./plane.svg"
                    alt=""
                    className="absolute -right-10 top-16 z-0 hidden md:block"
                />
            </motion.div>
        </div>
    );
};

export default Hero;
