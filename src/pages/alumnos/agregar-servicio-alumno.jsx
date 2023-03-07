import React, { useState, useContext, useEffect } from "react";
import { baseURL } from "../../config.js";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import SearchBar from "../common/searchBar";
import AlumnoContext from "../../context/Alumnos/alumnoContext";
import CustomTable from "../common/CustomTable/CustomTable";

const AgregarServicioAlumno = () => {
	const { selectedAlumno } = useContext(AlumnoContext);
	const [servicios, setServicios] = useState([]);
	const [ids, setIds] = useState([]);
	document.title = "Agregando Servicio";
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-2/3 flex flex-row w-full">
				<SideBarState>
					<Sidebar selectedIndex={3} />
				</SideBarState>
				<div className="mt-10 flex flex-col items-center h-full w-full px-10">
					<Card
					serviosAlumno={true}
						goBack={"/Alumnos/servicios"}
						head={
							<>
								<div className="flex w-full flex-row justify-between">
									<div className="flex flex-col w-1/2">
										<h5>{selectedAlumno.PrimerNombre}</h5>
									</div>
								</div>
							</>
						}
						editar={true}
						title={"d"}
						body={
							<div >				
								<SearchBar query="&dataFor=web" responseHanddler={setServicios} endPoint={`${baseURL}/buscar/Servicios`} entity={'Servicio'}/>							
										
								{servicios.length >= 1 
								? <CustomTable showCheckBoxex={true} handdleIds={setIds} data={servicios}/>
								: null}
							</div>
						}
						
						/* body={
                            <h1>ola</h1>
							{ <>
								<SearchBar
									entity={"alumno"}
									responseHanddler={setAlumnos}
									endPoint={`${baseURL}/buscar/alumnos`}
								/>
								<div className=" flex flex-col">
									{alumnos.length >= 1 ? (
										<>
											<TableAlumno
												handdleIds={setSelectedAlumnos}
												tipoTabla={1}
												data={alumnos[0]}
											/>{" "}
											<div className="justify-center flex flex-row w-full px-10">
												<div className="w-6/12 my-5">
													<SaveChangesBtn
														handdleClick={(e) => {
															postTutorados(selectedAlumnos, selectedTutor.Id);
														}}
														className="w-6/12"
														text={"Aceptar"}
													/>
												</div>
											</div>{" "}
										</>
									) : null}
								</div>
							</> }
						} */
					/>
				</div>
			</div>
		</div>
	);
};

export default AgregarServicioAlumno;
