import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import {useToggleState} from '../../../hooks/useToogleState'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggleState(false);

  return (
    <nav className="flex justify-between md:gap-[0.875rem] lg:gap-[2.875rem] xl:gap-[13.875rem] items-center md:px-0 
    relative z-10 
     ">
       {/* Logo */}
       <img src="./Logo.svg" alt="Logo" className="w-[7.181rem] h-[2.12rem]" />


       {/* Desktop Menu */}
       <div className="hidden lg:flex  text-[#212832] font-normal font-googleSans items-center cursor-pointer">
         <ul className="flex justify-between gap-[3.43rem]">
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/designations'>Destinations</Link> </li>
           <li><Link to='/hotels'>Hotels</Link></li>
           <li><Link to='/flights'>Flights</Link></li>
           <li><Link to='/bookings'>Bookings</Link></li>
         </ul>
         <div className="gap-4 flex ml-[3.37rem] font-medium">
           <button className="rounded-md px-6 py-2 text-black bg-transparent">
             Login
           </button>
           <button className="border border-black rounded-md px-6 py-2 text-black bg-transparent whitespace-nowrap">
             Sign up
           </button>
         </div>
         <span className="ml-[2.62rem] flex items-center font-medium text-[1.06rem]">
           En <Icon icon="ri:arrow-drop-down-line" />
         </span>
       </div>
       {/* Mobile Menu Icon */}
       <button
         className="block lg:hidden"
         onClick={setIsMenuOpen}
       >
         <Icon icon="mdi:menu" className="w-6 h-6" />
       </button>

       {/* Mobile Menu */}
       {isMenuOpen && (
         <div className="absolute top-[4.5rem] left-0 w-full bg-white shadow-lg z-50 p-4 flex flex-col gap-4">
           <ul className="flex flex-col items-start gap-4">
             <li>Destinations</li>
             <li>Hotels</li>
             <li>Flights</li>
             <li>Bookings</li>
           </ul>
           <div className="flex flex-col gap-2 w-fit">
             <button className="rounded-md px-6 py-2 text-black bg-transparent">
               Login
             </button>
             <button className="border border-black rounded-md px-6 py-2 text-black bg-transparent">
               Sign up
             </button>
           </div>
           <span className="flex items-center font-medium text-[1.06rem]">
             En <Icon icon="ri:arrow-drop-down-line" />
           </span>
         </div>
       )}
     </nav>
  );
};

export default Navbar;
