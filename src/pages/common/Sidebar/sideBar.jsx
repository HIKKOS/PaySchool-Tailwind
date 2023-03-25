import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarElement from "./sideBarElement";
import HamburgerBtn from "../Buttons/menu-hamburguesa";
import { useAuthContext } from "../../../context/auth/auth-context";
import Swal from "sweetalert2";

import {
	IconFileInvoice,
	IconUser,
	IconBox,
	IconBackpack,
	IconLogout,
	IconChartBar,
	IconBuildingStore,
} from "@tabler/icons-react";
import { PRIVATE } from "../../../config/router/paths";
const Sidebar = ({ index }) => {
	const navigate = useNavigate();
	const { logout } = useAuthContext();
	const [oculto, setOculto] = useState(false);
	return oculto ? (
		<>
			<div className=" min-h-screen transition-all ease-in-out pt-10 flex flex-col column-1 w-1/12 bg-blue-500">
				<HamburgerBtn
					handdleClick={(e) => {
						oculto ? setOculto(false) : setOculto(true);
					}}
				/>
			</div>
		</>
	) : (
		<>
			<div className=" min-h-screen transition-all  px-2 ease-in-out pt-10 flex flex-col column-1 w-1/4 bg-blue-500">
				{/* <div className="flex items-center  flex-row justify-center">
					<button
						type="button"
						className="w-full rounded-lg py-2 hover:bg-white text-white hover:text-blue-500 flex flex-row"
						onClick={(e) => {
							oculto ? setOculto(false) : setOculto(true);
						}}
					>
						<p className=" hover:text-blue-500">
							Panel de administración
						</p>
					</button>
				</div> */}
				<ul className="pl-4 content-center justify-items-start">
					<SideBarElement
						linkto={`${PRIVATE}/Dashboard`}
						selected={index === 0 ? true : false}
						icon={<IconChartBar size={35} />}
						text={"Resumen"}
					/>

					<SideBarElement
						linkto={`${PRIVATE}/Servicios`}
						selected={index === 1 ? true : false}
						icon={<IconBox size={35} />}
						text={"Servicios"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Tutores`}
						selected={index === 2 ? true : false}
						icon={<IconUser size={35} />}
						text={"Tutores"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Alumnos`}
						selected={index === 3 ? true : false}
						icon={<IconBackpack size={35} />}
						text={"Alumnos"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Pagos`}
						selected={index === 4 ? true : false}
						icon={<IconFileInvoice size={35} />}
						text={"Pagos"}
					/>
					<SideBarElement
						linkto={`${PRIVATE}/Ventanilla`}
						selected={index === 5 ? true : false}
						icon={<IconBuildingStore size={35} />}
						text={"Ventanilla"}
					/>

					<SideBarElement
						handdleClick={() => {
							Swal.fire({
								title: "¿Estás seguro?",
								text: "Estás a punto de cerrar sesión",
								icon: "warning",
								showCancelButton: true,
								cancelButtonColor: "#d33",
								confirmButtonColor: "#3085d6",
								confirmButtonText: "Si, cerrar sesión",
								cancelButtonText: "Cancelar",
							}).then((result) => {
								if (result.isConfirmed) {
									logout().then((res) => navigate("/"));
								}
							});
						}}
						selected={index === 4 ? true : false}
						icon={<IconLogout size={35} />}
						text={"Salir"}
					/>
				</ul>
			</div>
		</>
	);
};
export default Sidebar;
