import React, { useState, useContext } from "react";
import SideBarElement from "./sideBarElement";
import HamburgerBtn from "../Buttons/menu-hamburguesa";
import {
	HomeIcon,
	AcademicCapIcon,
	UserIcon,
	RectangleGroupIcon,
	ArrowLeftIcon,
	CubeIcon,
} from "@heroicons/react/24/solid";
const Sidebar = ({ selectedIndex }) => {
	const [oculto, setOculto] = useState(false);
	return oculto ? (
		<>
			<div className='transition-all ease-in-out pt-10 flex flex-col column-1 w-1/12 bg-blue-500'>
				<HamburgerBtn
					handdleClick={(e) => {
						oculto ? setOculto(false) : setOculto(true);
					}}
				/>
				
			</div>
		</>
	) : (
		<>
			<div className='transition-all ease-in-out pt-10 flex flex-col   column-1 w-1/4 bg-blue-500'>
				<div
					className="flex items-center  flex-row justify-center"
				>
					
					<button
						type="button"
						className="w-full rounded-lg py-2 hover:bg-white text-white hover:text-blue-500 flex flex-row"
						onClick={(e) => {
							
							oculto ? setOculto(false) : setOculto(true);
							
						}}
					>
						<ArrowLeftIcon className="mx-4 w-7 h-7" />
						<p className=" hover:text-blue-500">Panel de administración</p>
					</button>
				</div>
				<ul className='content-center   justify-items-start'>
					<SideBarElement
						linkto={"/"}
						selected={selectedIndex === 0 ? true : false}
						icon={<HomeIcon className='mx-5 h-7 w-7' />}
						text={"Inicio"}
					/>
					<SideBarElement
						linkto={"/Servicios"}
						selected={selectedIndex === 1 ? true : false}
						icon={<RectangleGroupIcon className='mx-5 h-7 w-7' />}
						text={"Servicios"}
					/>
					<SideBarElement
						linkto={"/Tutores"}
						selected={selectedIndex === 2 ? true : false}
						icon={<UserIcon className='mx-5 h-7 w-7' />}
						text={"Tutores"}
					/>
					<SideBarElement
						linkto={"/Alumnos"}
						selected={selectedIndex === 3 ? true : false}
						icon={<AcademicCapIcon className='mx-5 h-7 w-7' />}
						text={"Alumnos"}
					/>
					<SideBarElement
						linkto={"/Pagos"}
						selected={selectedIndex === 4 ? true : false}
						icon={<AcademicCapIcon className='mx-5 h-7 w-7' />}
						text={"Pagos"}
					/>
					{/* <SideBarElement
						linkto={"/Alumnos/Servicios"}
						selected={selectedIndex === 4 ? true : false}
						icon={<>						
							<CubeIcon className='mx-5 h-7 w-7' />
						</>}
						text={"Servicios de los alumnos"}
					/> */}
				</ul>
			</div>
		</>
	);
};
export default Sidebar;
