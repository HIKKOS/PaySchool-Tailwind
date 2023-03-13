import React, { useEffect, useState } from "react";


import FormAgregarServicio from "./common/formAgreagar";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import DeleteBtn from "../common/Buttons/delete";
import Carrousel from "../common/carrousel";


const AgregarServicio = () => {
    const [selectedIndex, setselectedIndex] = useState(1);
    return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
				<Sidebar selectedIndex={selectedIndex} />
					<div className="mt-2 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Servicios"}
							head={"Agregando Servicio"}
							editar={true}
						
							body={
								<div className=" flex flex-col">
									<FormAgregarServicio  />
									<div className="flex flex-row pt-5  justify-center">
											{/*<input
												id="archivo"
												name="archivo"
												className="w-2/3"
												type="file"
											/>
											 <AddElementBtn
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
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AgregarServicio