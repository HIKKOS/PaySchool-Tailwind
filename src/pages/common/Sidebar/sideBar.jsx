import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarElement from "./sideBarElement";
import HamburgerBtn from "../Buttons/menu-hamburguesa";
import { useAuthContext } from "../../../context/auth/auth-context";

import {
	IconFileInvoice,
	IconUser,
	IconBox,
	IconBackpack,
	IconLogout,
	IconChartBar,
	IconArrowAutofitWidth,
} from "@tabler/icons-react";
import { PRIVATE } from "../../../config/router/paths";
const Sidebar = ({ index }) => {
	const navigate = useNavigate();
	const { logout } = useAuthContext();
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
			<div className='transition-all max-h-full px-2 ease-in-out pt-10 flex flex-col column-1 w-1/4 bg-blue-500'>
				<div className="flex items-center  flex-row justify-center">
					 <button
						type="button"
						className="w-full rounded-lg py-2 hover:bg-white text-white hover:text-blue-500 flex flex-row"
						onClick={(e) => {
							oculto ? setOculto(false) : setOculto(true);
						}}
					>
						{/* <IconArrowAutofitWidth className="mx-4 w-7 h-7" /> */}
						<p className=" hover:text-blue-500">Panel de administración</p>
					</button> 
				</div>
				<ul className='content-center   justify-items-start'>
					<SideBarElement
						linkto={`${PRIVATE}/Dashboard`}
						selected={index === 0 ? true : false}
						icon={<IconChartBar className='mx-5 h-7 w-7' />}
						text={"Resumen"}
					/>

					<SideBarElement
						linkto={`${PRIVATE}/Servicios`}
						selected={index === 1 ? true : false}
						icon={<IconBox className='mx-5 h-7 w-7' />}
						text={"Servicios"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Tutores`}
						selected={index === 2 ? true : false}
						icon={<IconUser className='mx-5 h-7 w-7' />}
						text={"Tutores"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Alumnos`}
						selected={index === 3 ? true : false}
						icon={<IconBackpack className='mx-5 h-7 w-7' />}
						text={"Alumnos"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Pagos`}
						selected={index === 4 ? true : false}
						icon={<IconFileInvoice className='mx-5 h-7 w-7' />}
						text={"Pagos"}
					/>

					<SideBarElement
						handdleClick={() => {
							logout().then((res) => (navigate("/")));
						}}
						selected={index === 4 ? true : false}
						icon={<IconLogout className='mx-5 h-7 w-7' />}
						text={"Salir"}
					/>
				</ul>
			</div>
		</>
	);
};
export default Sidebar;
