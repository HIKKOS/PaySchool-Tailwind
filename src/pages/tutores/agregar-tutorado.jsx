import React, { useState, useContext, useEffect } from "react";
import TutoresContext from "../../context/Tutores/tutoresContext";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import SaveChangesBtn from "../common/Buttons/saveChanges";
import SearchBar from "../common/searchBar";
import TableAlumno from "../alumnos/common/TableAlumno/table-alumno";
import { baseURL } from "../../config.js";

const AgregarTutorado = () => {
	const { selectedTutor,postTutorados } = useContext(TutoresContext);
	if (!selectedTutor) {
		location.href = "/Tutores";
	} else {
	const [alumnos, setAlumnos] = useState([]);
	const [selectedAlumnos, setSelectedAlumnos] = useState([]);
	useEffect(()=> {setSelectedAlumnos([])},[])
	const [selectedIndex, setSelectedIndex] = useState(3);
	const nombre = `${selectedTutor.PrimerNombre} ${selectedTutor.SegundoNombre} ${selectedTutor.ApellidoPaterno} ${selectedTutor.ApellidoMaterno}`
		document.title = "Agregando tutorado";
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
				<SideBarState >
						<Sidebar selectedIndex={selectedIndex} />
					</SideBarState >
					<div className="mt-10 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Tutores"}
							head={nombre }
							editar={true}
							title={selectedTutor.PrimerNombre}
							body={
								<>
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
								</>
							}
						/>
					</div>
				</div>
			</div>
		);
	}
};
export default AgregarTutorado;
