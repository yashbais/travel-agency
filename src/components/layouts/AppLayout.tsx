import React from 'react'

export interface AppLayoutProps {
    children: React.ReactNode;
  }

const AppLayout: React.FC<AppLayoutProps>  = ({children}) => {
  return (
    <div className='xl:mx-[9.25rem] mx-[3rem] lg:my-2  my-10'>{children}</div>
  )
}

export default AppLayout