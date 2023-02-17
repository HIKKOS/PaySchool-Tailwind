import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ServicioContext from "../context/Servicio/ServicioContext";

import Sidebar from "./common/sideBar";
import Card from "./common/Card";
import TopNavBar from "./common/topBar";
import FormServicio from "./Servicios/common/FormServicio";
import Carrousel from "./common/carrousel";
import GoBack from "./common/Buttons/goBack";
import AddElementBtn from "../pages/common/Buttons/addElement";
import DeleteBtn from "../pages/common/Buttons/delete";
import EditBtn from "../pages/common/Buttons/edit";

document.title = "Editar";

const EditarServicios = () => {
	const { selectedService, postPhoto } = useContext(ServicioContext);
	const [selectedIndex, setselectedIndex] = useState(1);
	if (!selectedService) {
		return (
			<Link to='/servicios'>
				{" "}
				<button type="button">atras</button>
			</Link>
		);
	} else
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
									<div className="w-full">
										<Carrousel
											servicioId={selectedService.Id}
											slides={selectedService.ImgIds}
										/>
										<div className="flex flex-row pt-5 justify-center">
											<input
												id='archivo'
												name="archivo"
												className="w-1/3"
												type="file"
											/>
											<AddElementBtn
												className="w-2/3"
												type="button"
												handleClick={(e) => {	
													const formData = new FormData()	
													const input =
													document.querySelector('#archivo');																																														
													formData.append('archivo', input.files[0])																								
													postPhoto(selectedService.Id, formData);
												}}
												text='Agregar'
											/>
										</div>
										<div className="flex flex-row gap-1 justify-center py-5">
											<EditBtn text='Agregar' />
											<DeleteBtn text='Agregar' />
										</div>
									</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		);
};
export default EditarServicios;
