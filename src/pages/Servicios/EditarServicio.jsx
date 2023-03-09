import React, { useState, useContext } from "react";
import ServicioContext from "../../context/Servicio/ServicioContext";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import {SideBarState} from '../../context/sideBar/sideBarContext' 
import Card from "../../pages/common/Card";
import TopNavBar from "../../pages/common/topBar";
import FormServicio from "./common/FormServicio";
import Carrousel from "../../pages/common/carrousel";
import AddElementBtn from "../../pages/common/Buttons/addElement";
import DeleteBtn from "../../pages/common/Buttons/delete";
import EditBtn from "../../pages/common/Buttons/edit";

const EditarServicios = () => {	
	const { selectedService, postPhoto, delPhoto } = useContext(ServicioContext);
	const [setFoto, setsetFoto] = useState();
	/* if (!selectedService) {
		location.href = "/Servicios";
	} else { */
		document.title = `Editando: ${selectedService.Nombre}`;
		const [selectedIndex, setselectedIndex] = useState(1);
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-full flex flex-row w-full">
					<SideBarState>
						<Sidebar selectedIndex={selectedIndex} />
					</SideBarState>{" "}
					<div className="flex flex-col items-center h-full w-full px-10">
						<TopNavBar />
						<Card
							goBack={"/Servicios"}
							head={`Editar: ${selectedService.Nombre}`}
							editar={true}
							title={selectedService.Nombre}
							body={
								<div className=" flex flex-row">
									<FormServicio handdlePostPhoto={postPhoto}/>
									<div className="w-full">
										<Carrousel
											servicioId={selectedService.Id}
											slides={selectedService.ImgIds}
										/>
										<div className="flex flex-row pt-5  justify-center">
											<input
												
												id='archivo'
												name="archivo"
												className="w-2/3"
												type="file"
											/>
											{/* <AddElementBtn
												className="w-2/3"
												type="button"
												handleClick={ (e) => {
													const formData = new FormData();
													const input = document.querySelector("#archivo");
													formData.append("archivo", input.files[0]);
													postPhoto(selectedService.Id, formData);

												}}
												text='Agregar'
											/> */}
										</div>
										<div className="flex flex-row gap-1 justify-center py-5">
									
											<DeleteBtn
												text='Quitar'
												handleClick={(e) => {
													const input = document.querySelector("#archivo");
												}}
											/>
										</div>
									</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		);
		/* 	} */
	
};
export default EditarServicios;
