import React, { useState, useEffect } from "react";
import { cn } from "../../utils/helpers";

export interface NavLayoutProps {
  children: React.ReactNode;
}

const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false); // Tracks scroll state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Threshold for scroll
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={cn(
      "fixed top-0 left-0 w-full z-10 transition-colors duration-300",
      hasScrolled && "bg-white shadow-md",
       !hasScrolled && "bg-transparent"
    )}
    >
      <div
        className={cn(
          `xl:mx-[8.80rem] lg:mx-[2.80rem] 
           md:mx-[2.80rem] md:my-[0.80rem] mx-2 my-4`,{
            "lg:my-[3.04rem]":!hasScrolled,
            "lg:my-[1.04rem]":hasScrolled
           })}
      >
        {children}
      </div>
    </div>
  );
};

export default NavLayout;
