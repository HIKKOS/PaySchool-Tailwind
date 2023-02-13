import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ServicioContext from "../context/Servicio/ServicioContext";

import Sidebar from "./common/sideBar";
import Card from "./common/Card";
import TopNavBar from "./common/topBar";
import FormServicio from "./Servicios/common/FormServicio";
import Carrousel from "./common/carrousel";

document.title = "Editar";

const EditarServicios = () => {
	const { selectedService } = useContext(ServicioContext);
	const [selectedIndex, setselectedIndex] = useState(1);
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-2/3 flex flex-row w-full">
				<Sidebar selectedIndex={selectedIndex} />
				<div className="h-full w-full">
					<TopNavBar />
					<Card
						editar={true}
						title={selectedService.Nombre}
						body={	
							<div className=" flex flex-row">							
								<FormServicio />									
								<Carrousel className="w-1/3" servicioId={selectedService.Id} slides={selectedService.ImgIds} />	
							</div>																																			
						} 
					/>
				</div>
			</div>
		</div>
	);
};
export default EditarServicios;
