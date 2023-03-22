import React, { useState, useContext } from "react";
import SideBarElement from "./sideBarElement";
import { Tabs } from 'flowbite'
import HamburgerBtn from "../Buttons/menu-hamburguesa";
import {
	HomeIcon,
	AcademicCapIcon,
	UserIcon,
	RectangleGroupIcon,
	ArrowLeftIcon,
	CubeIcon,
} from "@heroicons/react/24/solid";
import {
	IconFileInvoice,
	IconHome,
	IconUser,
	IconBox,
	IconBackpack,
	IconLogout,
	IconChartBar
} from "@tabler/icons-react";
import { PRIVATE } from "../../../config/router/paths";
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
			<div className='transition-all ease-in-out pt-10 flex flex-col column-1 w-1/4 bg-blue-500'>
				<div className="flex items-center  flex-row justify-center">
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
						linkto={`${PRIVATE}/Dashboard`}
						selected={selectedIndex === 0 ? true : false}
						icon={<IconChartBar className='mx-5 h-7 w-7' />}
						text={"Resumen"}
					/>
			
					<SideBarElement
						linkto={`${PRIVATE}/Servicios`}
						selected={selectedIndex === 1 ? true : false}
						icon={<IconBox className='mx-5 h-7 w-7' />}
						text={"Servicios"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Tutores`}
						selected={selectedIndex === 2 ? true : false}
						icon={<IconUser className='mx-5 h-7 w-7' />}
						text={"Tutores"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Alumnos`}
						selected={selectedIndex === 3 ? true : false}
						icon={<IconBackpack className='mx-5 h-7 w-7' />}
						text={"Alumnos"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Pagos`}
						selected={selectedIndex === 4 ? true : false}
						icon={<IconFileInvoice className='mx-5 h-7 w-7' />}
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
