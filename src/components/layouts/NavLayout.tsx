import React from 'react'

export interface NavLayoutProps {
    children: React.ReactNode;
  }

const NavLayout: React.FC<NavLayoutProps>  = ({children}) => {
  return (
    <div 
    className='xl:mx-[8.80rem] lg:mx-[2.80rem] lg:my-[3.04rem] 
    md:mx-[2.80rem] md:my-[0.80rem]
     mx-2 my-4
    '
    >
        {children}</div>
  )
}

export default NavLayout