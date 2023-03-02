import React, { useState, useContext } from "react";
import TutoresContext from "../../context/Tutores/tutoresContext";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import SaveChangesBtn from "../common/Buttons/saveChanges";
import SearchBar from "../common/searchBar";
import TableAlumno from "../alumnos/common/TableAlumno/table-alumno";
import { baseURL } from "../../config.js";

const AgregarTutorado = () => {
	const { selectedTutor, setTutorados } = useContext(TutoresContext);
	const [alumnos, setAlumnos] = useState([]);
	const [selectedAlumnos, setSelectedAlumnos] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(3);
	if (!selectedTutor) {
		location.href = "/Tutores";
	} else {
		document.title = "Agregando tutorado";
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
					<Sidebar selectedIndex={selectedIndex} />
					<div className="mt-10 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Tutores"}
							head={"Agregar tutorado"}
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
												{" "}
												<TableAlumno
                                                    handdleIds={setSelectedAlumnos}
													paraAgreagarTutor={true}
													data={alumnos[0]}
												/>{" "}
												<div className="justify-center flex flex-row w-full px-10">
													<div className="w-6/12 my-5">
														<SaveChangesBtn
															handdleClick={(e) => {
																console.log(selectedAlumnos);
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
