import React, { useState, useContext } from "react";
import ServicioContext from "../../context/Servicio/ServicioContext";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../../pages/common/Card";
import TopNavBar from "../../pages/common/topBar";
import FormServicio from "./common/FormServicio";
import Carrousel from "../../pages/common/carrousel";
import AddElementBtn from "../../pages/common/Buttons/addElement";
import DeleteBtn from "../../pages/common/Buttons/delete";
import EditBtn from "../../pages/common/Buttons/edit";


const EditarServicios = () => {
	
	const { selectedService, postPhoto, delPhoto } = useContext(ServicioContext);
	document.title = `Editando: ${selectedService.Nombre}`;
	console.log({selectedService});
	const [selectedIndex, setselectedIndex] = useState(1);
	if (!selectedService) {
		return <h1>{selectedService}</h1>
	} else { 
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
					<Sidebar selectedIndex={selectedIndex} />
					<div className="flex flex-col items-center h-full w-full px-10">
						<TopNavBar />
						<Card
						head={`Editar: ${selectedService.Nombre}`}
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
											onChange={ e => this.handdleFile(e)}
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
											<EditBtn text='Agregar'/>
											<DeleteBtn text='Agregar' handleClick={
												(e) => {
													delPhoto(selectedService.Id, )
												}
											}/>
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
						}
};
export default EditarServicios;
