document.title = "Servicios del alumno";
import React, { useState, useContext, useEffect } from "react";
import { baseURL } from "../../config.js";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import SearchBar from "../common/searchBar";
import AlumnoContext from "../../context/Alumnos/alumnoContext";
import CustomTable from "../common/CustomTable/CustomTable";
import TableSearchServiciosAlumno from "../Servicios/table-agregar-servicio-alumno";
import TopNavBar from "../common/topBar";
import SaveChangesBtn from "../common/Buttons/saveChanges.jsx";

const AgregarServicioAlumno = () => {
	const { selectedAlumno } = useContext(AlumnoContext);
	const [servicios, setServicios] = useState([]);
	const [serviciosIds, setServiciosIds] = useState([]);
	useEffect(() => {
		setServiciosIds([]);
	}, []);

	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
					<Sidebar selectedIndex={3} />
					<div className="mt-10 flex flex-col items-center h-full w-full px-10">
						<Card
							serviosAlumno={true}
							goBack={"/Alumnos/servicios"}
							head={
								<>
									<div className="flex w-full flex-row justify-between">
										<div className="flex flex-col w-1/2">
											<h5>
												{selectedAlumno.PrimerNombre}
											</h5>
										</div>
									</div>
								</>
							}
							editar={true}
							title={"d"}
							body={
								<div>
									<SearchBar
										query="&dataFor=web"
										responseHanddler={setServicios}
										endPoint={`${baseURL}/buscar/Servicios`}
										entity={"Servicio"}
									/>
									<TableSearchServiciosAlumno handdleIds={setServiciosIds} data={servicios}/>
									{/*{servicios.length >= 1 ? (
										<TableSearchServiciosAlumno data={servicios} />
										  <CustomTable
											showCheckBoxex={true}
											handdleIds={setServiciosIds}
											data={servicios.map((servicio) => {
												const {
													Id,
													Nombre,
													Descripcion,
													Costo,
												} = servicio;
												return {
													Id,
													Nombre,
													Descripcion,
													Costo
												};
											})}
										/>  
										) : null}*/}
										<div className="pt-5 flex flex-row w-full justify-center">
										<div className="w-1/3">
											<SaveChangesBtn text={'Aceptar'}/>
										</div>
									</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgregarServicioAlumno;
