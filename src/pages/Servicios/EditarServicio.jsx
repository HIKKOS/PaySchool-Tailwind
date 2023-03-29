import React, { useState, useContext } from "react";
import { Modal } from "flowbite";
import { useNavigate } from "react-router-dom";
import ServicioContext from "../../context/Servicio/ServicioContext";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../../pages/common/Card";
import TopNavBar from "../../pages/common/topBar";
import Carrousel from "../../pages/common/carrousel";
import DeleteBtn from "../../pages/common/Buttons/delete";
import SaveChangesBtn from "../common/Buttons/saveChanges";
import Footer from "../common/Footer/Footer";
import EditBtn from "../../pages/common/Buttons/edit";
import DropDown from "../common/DropdownSearch/dropDown";
import AddElementBtn from "../common/Buttons/addElement";
import { baseURL } from "../../config";
import axios from "axios";
import { PRIVATE } from "../../config/router/paths";
import DragAndDrop from "../alumnos/common/DragAndDrop";
const deletePhoto = async ({ ServicioId, photoId, slides, setSlides }) => {
	try {
		const response = await axios.delete(
			`${baseURL}/uploads/${ServicioId}/${photoId}`,
			{
				headers: {
					"x-token": localStorage.getItem("jwt"),
				},
			}
		);
		if (response.status === 200) {
			const index = slides.indexOf(photoId);
			if (index > -1) {
				index.splice(index, 1);
			}
			setSlides([...slides]);
			location.href = `${PRIVATE}/Servicios`;
		}
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

const uploadImage = async ({ ServicioId, formData }) => {
	try {
		const response = await axios.post(
			`${baseURL}/uploads/${ServicioId}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
					"x-token": localStorage.getItem("jwt"),
				},
			}
		);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

const EditarServicio = () => {
	const { selectedService, postPhoto, getById, delPhoto, putServicio } =
		useContext(ServicioContext);
	const {
		Id,
		Nombre,
		Cancelable,
		Descripcion,

		Costo,

		HorarioServicio,
	} = selectedService;

	const navigate = useNavigate();
	const [photoSelected, setPhotoSelected] = useState();
	const [slides, setSlides] = useState(selectedService.ImgPaths);
	const [inpNombre, setInpNombre] = useState(Nombre);
	const [inpCosto, setInpCosto] = useState(Costo);
	const [inpDescripcion, setInpDescripcion] = useState(Descripcion);
	const [inpCancelable, setInpCancelable] = useState(Cancelable);
	const [diaSemana, setDiaSemana] = useState("Lunes");
	const [diaCobro, setDiaCobro] = useState();
	const [HoraInicio, setHoraInicio] = useState(7);
	const [HoraFin, setHoraFin] = useState(7);
	const [frecuencaPago, setFrecuencaPago] = useState("MENSUAL");
	const [inpHorario, setHorario] = useState(
		!HorarioServicio ? [] : HorarioServicio
	);
	const [horarioValido, setHorarioValido] = useState(true);
	const [errMsg, setErrMsg] = useState("El horario no es valido");
	return (
		<div className="container max-w-full w-full">
			<div className="flex flex-col w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false} />
					<div className="flex flex-row h-full">
						<Sidebar selectedIndex={3} />
						<div className="my-5 flex flex-col items-center h-full w-full px-10">
							<Card
								goBack={"/Servicios"}
								head={"Editar servicio"}
								editar={true}
								title={selectedService.Nombre}
								body={
									<div className="w-full flex flex-col">
										<div className="flex flex-row w-full gap-2 mb-6">
											<div className="w-full">
												<label
													for="base-input"
													class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
												>
													Nombre
												</label>
												<input
													value={inpNombre}
													onChange={(e) => {
														setInpNombre(
															e.target.value
														);
													}}
													type="text"
													placeholder="Nombre"
													id="base-input"
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												/>
											</div>
											<div className="w-3/6">
												<label
													for="base-input"
													class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
												>
													Costo
												</label>
												<input
													value={inpCosto}
													onChange={(e) => {
														setInpCosto(
															e.target.value
														);
													}}
													placeholder="Costo"
													type="number"
													id="base-input"
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												/>
											</div>
											<div className="w-3/6">
												<label
													for="base-input"
													class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
												>
													Frecuencia de pago:
												</label>

												<DropDown
													handdleMouseUp={
														setFrecuencaPago
													}
													defaultValue={`${
														frecuencaPago[0]
													}${frecuencaPago
														.substring(1)
														.toLowerCase()}`}
													className=""
													items={[
														"Semanal",
														"Mensual",
														"Bimestral",
														"Semestral",
														"Anual",
													]}
												/>
											</div>
										</div>
										<div className="flex flex-row w-full">
											<textarea
												value={inpDescripcion}
												placeholder="Descripcion"
												onChange={(e) => {
													setInpDescripcion(
														e.target.value
													);
												}}
												className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											/>
										</div>
										<div className="flex flex-row mt-4 ">
											<div className="flex flex-col w-1/2 ">
												<div className="pt-1 flex flex-col w-full gap-2 mb-6">
													<label
														for="base-input"
														class="flex flex-col  mb-2 text-xl font-medium text-gray-900 dark:text-white"
													>
														Horarios
													</label>
													<div className="flex flex-row items-center gap-2">
														{inpHorario.length >=
														1 ? (
															<ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white">
																{inpHorario.map(
																	(
																		item,
																		index
																	) => (
																		<li class="flex flex-row w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
																			<div className="w-full">
																				{`${
																					item
																						.Dia[0]
																				}${item.Dia.substring(
																					1,
																					item
																						.Dia
																						.length
																				).toLowerCase()} de: ${
																					item.Inicio
																				}:00 hasta: ${
																					item.Fin
																				}:00`}
																			</div>
																			<div className="w-1/4">
																				<DeleteBtn
																					handdleClick={(
																						e
																					) => {
																						setHorario(
																							[
																								...inpHorario.slice(
																									0,
																									index
																								),
																								...inpHorario.slice(
																									index +
																										1,
																									inpHorario.length
																								),
																							]
																						);
																					}}
																					text="Quitar"
																				/>
																			</div>
																		</li>
																	)
																)}
															</ul>
														) : (
															<p>
																Sin horarios
																agregados
															</p>
														)}
													</div>
													<div
														onChange={(e) =>
															setHorarioValido(
																true
															)
														}
														className="flex flex-row items-center gap-2"
													>
														<p>Dia:</p>
														<DropDown
															handdleMouseUp={
																setDiaSemana
															}
															defaultValue={
																"Lunes"
															}
															items={[
																"Martes",
																"Miercoles",
																"Jueves",
																"Viernes",
															]}
														/>
														<p>Empieza:</p>
														<DropDown
															handdleMouseUp={
																setHoraInicio
															}
															defaultValue={7}
															items={[
																8, 9, 10, 11,
																12, 13, 14, 15,
																16,
															]}
														/>
														<p>Termina:</p>
														<DropDown
															handdleMouseUp={
																setHoraFin
															}
															defaultValue={7}
															items={[
																8, 9, 10, 11,
																12, 13, 14, 15,
																16,
															]}
														/>
														<AddElementBtn
															handleClick={(
																e
															) => {
																if (
																	diaSemana ===
																		0 ||
																	diaSemana ===
																		"Dia" ||
																	HoraInicio ===
																		0 ||
																	HoraInicio ===
																		"Empieza" ||
																	HoraFin ===
																		0 ||
																	HoraFin ===
																		"Termina"
																) {
																	setErrMsg(
																		"Por favor, seleccioneun horario valido"
																	);
																	setHorarioValido(
																		false
																	);
																	return;
																}
																if (
																	Number(
																		HoraInicio
																	) >=
																	Number(
																		HoraFin
																	)
																) {
																	setErrMsg(
																		"La hora de inicio debe ser menor a la hora de fin"
																	);
																	setHorarioValido(
																		false
																	);
																	return;
																}
																const dias =
																	inpHorario.map(
																		(h) => {
																			return h.Dia;
																		}
																	);
																if (
																	dias.includes(
																		diaSemana.toUpperCase()
																	)
																) {
																	setHorarioValido(
																		false
																	);
																	setErrMsg(
																		"Ya existe un horario para este dia"
																	);
																	return;
																}
																setHorario([
																	...inpHorario,
																	{
																		Dia: diaSemana
																			.toString()
																			.toUpperCase(),
																		Inicio: Number(
																			HoraInicio
																		),
																		Fin: Number(
																			HoraFin
																		),
																	},
																]);
																setHorarioValido(
																	true
																);
																console.log({
																	Horario:
																		inpHorario,
																});
															}}
															text={"Agregar Dia"}
														/>
													</div>
													{!horarioValido ? (
														<div className="flex flex-row items-center gap-2">
															<p className="text-red-600">
																{errMsg}
															</p>
														</div>
													) : null}
												</div>
												<div className="flex flex-row w-full my-8">
													<label class="relative inline-flex items-center cursor-pointer">
														<input
															id="checkbox"
															defaultChecked={
																inpCancelable
															}
															onChange={(e) => {
																setInpCancelable(
																	e.target
																		.checked
																);
																!inpCancelable
																	? setDiaCobro(
																			undefined
																	  )
																	: setInpCancelable(
																			0
																	  );
															}}
															type="checkbox"
															value=""
															class="sr-only peer"
														/>
														<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
														<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
															Cancelable
														</span>
													</label>
												</div>

												{inpCancelable ? (
													<div className="flex flex-row w-full gap-2 mb-6">
														<p className="w-full text">
															El tutor puede
															contratar y cancelar
															el servicio en
															cualquier momento
														</p>
													</div>
												) : (
													<div className="flex flex-col items-center w-full  gap-2 mb-6">
														<div className="flex w-full flex-row justify-start gap-5 items-center">
															<label
																for="base-input"
																class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
															>
																Fecha de Cobro
																(dia del mes):
															</label>

															<input
																onChange={(
																	e
																) => {
																	setDiaCobro(
																		Number(
																			e
																				.target
																				.value
																		)
																	);
																}}
																type="number"
																placeholder="Dia"
																pattern="[0-31]*"
																id="base-input"
																value={diaCobro}
																class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
															/>
														</div>
														<div className=" flex flex-row justify-start">
															<p className="w-full text">
																Se sugiere que
																sea el dia de
																cobro de la
																mensualidad sea
																entre el 1 y el
																28 de cada mes
																para evitar
																problemas. caso
																contrario la
																mensualidad se
																cobrara el
																ultimo dia del
																mes.
															</p>
														</div>
													</div>
												)}
											</div>
											<div className="flex flex-col w-1/2">
												{selectedService.ImgPaths
													.length > 0 ? (
													<div className="flex flex-col w-full justify-center items-center gap-2 mb-6">
														<Carrousel
															servicioId={
																selectedService.Id
															}
															slides={slides}
															setPhotoSelected={
																setPhotoSelected
															}
														/>

														<div className="flex flex-row">
															<EditBtn
																linkto={
																	"/servicio/editar/imagenes"
																}
																handdleClick={() => {}}
																text="Editar imagenes"
															/>
														</div>
													</div>
												) : (
													<DragAndDrop />
												)}
											</div>
										</div>
										<div className="flex flex-row w-full my-8">
											<SaveChangesBtn
												text={"Guardar Cambios"}
												handdleClick={() => {
													const servicio = {
														Id: Id,
														Nombre: inpNombre,
														Descripcion:
															inpDescripcion,
														FechaPago: inpCancelable
															? undefined
															: diaCobro,
														HorarioServicio:
															inpHorario,
														Costo: Number(inpCosto),
														Cancelable:
															Boolean(
																inpCancelable
															),
														FrecuenciaDePago:
															frecuencaPago.toUpperCase(),
													};
													//!! upload foto arreglar
													//!! navgeate a alumnos
													/* const file =
														document.getElementById(
															"fileInput"
														)?.files;

													if (
														!file &&
														file[0] !== undefined
													) {
														const formData =
															new FormData();
														formData.append(
															"archivo",
															file[0]
														);
														uploadImage({
															ServicioId:
																selectedService.Id,
															formData,
														});
													} */
													putServicio(servicio).then(
														(res) =>
															navigate(
																`${PRIVATE}/Servicios`
															)
													);
												}}
											/>
										</div>
									</div>
								}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default EditarServicio;
