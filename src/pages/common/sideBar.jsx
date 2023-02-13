import React from 'react'
import SideBarElement from './sideBarElement'
import { HomeIcon,AcademicCapIcon,UserIcon,RectangleGroupIcon } from '@heroicons/react/24/solid'
const Sidebar = ({ selectedIndex }) => {
    return(
        <div className='flex flex-col h-full rounded-tr-3xl rounded-br-3xl bg-gradient-to-b from-sky-500 to-blue-700 column-1 w-1/4 bg-blue-500'>
          <ul className=' content-center ml-2  justify-items-start'>
             <SideBarElement linkto={'/'} selected={selectedIndex === 0 ? true : false} icon={<HomeIcon className=' h-6 w-6'/>} text={'Inicio'} />
             <SideBarElement linkto={'/servicios'} selected={selectedIndex === 1 ? true : false} icon={<RectangleGroupIcon className=' h-6 w-6'/>} text={'Servicios'} />
             <SideBarElement linkto={'/'} selected={selectedIndex === 2 ? true : false} icon={<UserIcon className=' h-6 w-6'/>} text={'Tutores'} />
             <SideBarElement linkto={'/'} selected={selectedIndex === 3 ? true : false} icon={<AcademicCapIcon className=' h-6 w-6'/>} text={'Alumnos'} />             
          </ul>
        </div>
    )
}
export default Sidebar