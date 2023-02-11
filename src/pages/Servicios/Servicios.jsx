import React, { useEffect, useContext,useState } from "react";
import ServicioContext from "../../context/Servicio/ServicioContext";

import Sidebar from "../common/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";

const Servicios = () => {
	const { getServicios } = useContext( ServicioContext )
	useEffect(() => {
		getServicios()
	}, []);
	const [selectedIndex, setselectedIndex] = useState(0)
	return (
		<div className= "bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className='h-2/3 flex flex-row w-full'>
			<Sidebar selectedIndex={selectedIndex}/>
			<div className="h-full w-full">
			<TopNavBar />
				<Card />
			</div>
            </div>
        </div>
	);
};
export default Servicios;
