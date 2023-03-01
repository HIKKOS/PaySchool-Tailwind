import React from 'react'
import SideBarElement from './sideBarElement'
import { HomeIcon,AcademicCapIcon,UserIcon,RectangleGroupIcon } from '@heroicons/react/24/solid'
const Sidebar = ({ selectedIndex }) => {
    return(
        <div className='flex flex-col h-full rounded-tr-md rounded-br-md bg-gradient-to-b from-sky-500 to-blue-700 column-1 w-1/4 bg-blue-500'>
          <ul className='content-center   justify-items-start'>
             <SideBarElement linkto={'/'} selected={selectedIndex === 0 ? true : false} icon={<HomeIcon className='mx-5 h-7 w-7'/>} text={'Inicio'} />
             <SideBarElement linkto={'/Servicios'} selected={selectedIndex === 1 ? true : false} icon={<RectangleGroupIcon className='mx-5 h-7 w-7'/>} text={'Servicios'} />
             <SideBarElement linkto={'/Tutores'} selected={selectedIndex === 2 ? true : false} icon={<UserIcon className='mx-5 h-7 w-7'/>} text={'Tutores'} />
             <SideBarElement linkto={'/Alumnos'} selected={selectedIndex === 3 ? true : false} icon={<AcademicCapIcon className='mx-5 h-7 w-7'/>} text={'Alumnos'} />             
          </ul>
        </div>
    )
}
export default Sidebar