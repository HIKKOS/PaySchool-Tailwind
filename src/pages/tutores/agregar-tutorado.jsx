import React, { useState, useContext, useEffect } from "react";
import TutoresContext from "../../context/Tutores/tutoresContext";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import SaveChangesBtn from "../common/Buttons/saveChanges";
import SearchBar from "../common/searchBar";
import TableAlumno from "../alumnos/common/TableAlumno/table-alumno";
import { baseURL } from "../../config.js";
import DropDown from "../common/DropdownSearch/dropDown";
import Swal from "sweetalert2";
const AgregarTutorado = () => {
	const { selectedTutor, postTutorados } = useContext(TutoresContext);
	const [grado, setGrado] = useState("Grado");
	const [grupo, setGrupo] = useState("Grupo");
	const [withTutor, setWithTutor] = useState(false);
	if (!selectedTutor) {
		location.href = "/Tutores";
	} else {
		const [alumnos, setAlumnos] = useState([]);
		const [selectedAlumnos, setSelectedAlumnos] = useState([]);
		useEffect(() => {
			setSelectedAlumnos([]);
		}, []);
		const [selectedIndex, setSelectedIndex] = useState(3);
		const nombre = `${selectedTutor.PrimerNombre} ${selectedTutor.SegundoNombre} ${selectedTutor.ApellidoPaterno} ${selectedTutor.ApellidoMaterno}`;
		document.title = "Agregando tutorado";
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
					<SideBarState>
						<Sidebar selectedIndex={selectedIndex} />
					</SideBarState>
					<div className="mt-10 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Tutores"}
							head={
								<div>
									<h1 className="pb-2">
										{"Agregar tutorado"}
									</h1>
									<h2 className="text-black/50">{nombre}</h2>
								</div>
							}
							editar={true}
							title={selectedTutor.PrimerNombre}
							body={
								<div className="flex flex-row w-full">
									<div className="flex flex-col w-full">
										<div className="flex flex-row gap-2">
											<SearchBar
												entity={"Alumno"}
												responseHanddler={setAlumnos}
												endPoint={`${baseURL}/buscar/alumnos`}
												query={`${
													grado === "Grado"
														? ""
														: `&Grado=${grado}`
												}${
													grupo === "Grupo"
														? ""
														: `&Grupo=${grupo}`
												}${withTutor ? "&showOnly=withTutor" : ""}`}
											/>
											<div className="flex flex-col justify-center w-4/5">
												<div className="flex flex-row gap-2">
													<div className="flex flex-col w-1/3">
														<div className="flex flex-row items-center gap-3 w-2/3">
															<p>Grado:</p>
															<DropDown
																defaultValue={
																	"Grado"
																}
																handdleMouseUp={
																	setGrado
																}
																items={[
																	1, 2, 3, 4,
																	5, 6,
																]}
															/>
														</div>
													</div>
													<div className="flex flex-col w-1/3">
														<div className="flex flex-row items-center gap-3 w-2/3">
															<p>Grupo:</p>
															<DropDown
																defaultValue={
																	"Grupo"
																}
																handdleMouseUp={
																	setGrupo
																}
																items={[
																	"A",
																	"B",
																	"C",
																	"D",
																]}
															/>
														</div>
													</div>
													<div className="flex flex-col w-1/3 justify-center">
														<label class="relative inline-flex items-center cursor-pointer">
															<input
																id="checkbox"
																defaultChecked={
																	withTutor
																}
																onClick={() =>
																	setWithTutor(
																		!withTutor
																	)
																}
																type="checkbox"
																
																class="sr-only peer"
															/>
															<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
															<span class="ml-3 text-sm  text-gray-900 dark:text-gray-300">
																Con tutor
															</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className=" flex flex-col">
											{alumnos.length === 0 ? (
												<h1 className="text-center text-xl py-6">
													sin resultados
												</h1>
											) : (
												<>
													<TableAlumno
														handdleIds={
															setSelectedAlumnos
														}
														tipoTabla={1}
														data={alumnos}
													/>
													<div className="justify-center flex flex-row w-full px-10">
														<div className="w-6/12 my-5">
															<SaveChangesBtn
																handdleClick={(
																	e
																) => {
																	if (
																		selectedAlumnos.length ===
																		0
																	) {
																		Swal.fire(
																			{
																				title: "No se ha seleccionado ningun alumno",

																				icon: "info",

																				confirmButtonColor:
																					"#3085d6",

																				confirmButtonText:
																					"Aceptar",
																			}
																		);
																		return;
																	} else {
																		postTutorados(
																			selectedAlumnos,
																			selectedTutor.Id
																		);
																	}
																}}
																className="w-6/12"
																text={"Aceptar"}
															/>
														</div>
													</div>
												</>
											)}
										</div>
									</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		);
	}
};
export default AgregarTutorado;
