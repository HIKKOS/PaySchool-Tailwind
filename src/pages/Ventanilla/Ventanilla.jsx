import React, { useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/input";
import SearchBar from "../common/searchBar";
import Layout from "../common/Layout";
import Select from "react-select";
import DropDown from "../common/DropdownSearch/dropDown";
import { baseURL } from "../../config";
import axios from "axios";

const Ventanilla = () => {
	document.title = "Cobrar en Ventanilla";
	const [tutores, setTutores] = useState([]);
	const [alumnos, setAlumnos] = useState([]);
	const [servicio, setServicio] = useState([]);
	const [searchTutor, setSearchTutor] = useState("");
	const [searchServicios, setSearchServicios] = useState("");
	const [typingTimeout, setTypingTimeout] = useState(0);
	const searchTutorData = () => {
		console.log("searchTutor");
		axios
			.get(`${baseURL}/buscar/tutores?tutor=${searchTutor}`, {
				headers: { "x-token": localStorage.getItem("jwt") },
			})
			.then((res) => {
				setTutores(res.data.tutores);
			});
	};
	const getTutorados = ({ Id }) => {
		axios
			.get(`${baseURL}/tutores/tutorados/web/${Id}`, {
				headers: { "x-token": localStorage.getItem("jwt") },
			})
			.then((res) => {
				setAlumnos(res.data.tutorados);
				console.log(res.data.tutorados);
			});
	};
	const searchServicioData = () => {
		axios
			.get(`${baseURL}/buscar/Servicios?Servicio=${searchServicios}`, {
				headers: { "x-token": localStorage.getItem("jwt") },
			})
			.then((res) => {
				console.log(res.data);
				setServicio(res.data);
			});
	};
	const handleChangeTutor = (option) => {
		console.log(option);
		if (option) {
			getTutorados({ Id: option.value });
		} else {
			setAlumnos([]);
		}
	};
	const handleSearch = ({ event, searchTerm, fetchData }) => {
		const value = event;
		console.log(value);
		searchTerm(value);
		clearTimeout(typingTimeout);
		setTypingTimeout(
			setTimeout(() => {
				fetchData();
			}, 2000)
		);
	};
	return (
		<Layout>
			<div className="mt-2 flex flex-col items-center h-full w-full px-10">
				<div className="justify-center w-1/2">
					<Card
						head={
							<div className="flex flex-row w-full justify-between">
								Cobrar servicio
							</div>
						}
						body={
							<>
								<div className="flex flex-col w-full">
									<label htmlFor="tutor">Tutor</label>
									<div className="flex flex-row">
										<Select
											className="w-full"
											isClearable={true}
											placeholder="Apellido paterno, materno o nombre"
											onInputChange={(e) => {
												setSearchTutor(e);
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													searchTutorData();
												}
											}}
											onChange={handleChangeTutor}
											options={tutores?.map((tutor) => ({
												value: tutor.Id,
												label: `${
													tutor.ApellidoPaterno
												} ${tutor.ApellidoMaterno} ${
													tutor.PrimerNombre
												} ${tutor.SegundoNombre ?? ""}`,
											}))}
										/>
									</div>
								</div>
								<div className="flex flex-col my-4 w-full">
									<label htmlFor="tutor">Alumno</label>
									<Select
										isDisabled={alumnos.length === 0}
										className="w-full"
										placeholder={
											tutores.length === 0
												? ""
												: alumnos.length === 0
												? "sin tutorados"
												: "Seleccione un tutorado"
										}
										isLoading={alumnos.length === 0}
										defaultInputValue={
											alumnos?.map((tutor) => ({
												value: tutor.Id,
												label: `${
													tutor.ApellidoPaterno
												} ${tutor.ApellidoMaterno} ${
													tutor.PrimerNombre
												} ${tutor.SegundoNombre ?? ""}`,
											}))[0]
										}
										options={
											alumnos.length === 0
												? [
														{
															value: "0",
															label: "sin tutorados",
														},
												  ]
												: alumnos?.map((tutor) => ({
														value: tutor.Id,
														label: `${
															tutor.ApellidoPaterno
														} ${
															tutor.ApellidoMaterno
														} ${
															tutor.PrimerNombre
														} ${
															tutor.SegundoNombre ??
															""
														}`,
												  }))
										}
									/>
								</div>
								<div className="flex flex-row items-center gap-4 w-full">
									<div className="flex flex-col w-full">
										<label htmlFor="tutor">Servicio</label>
										<div className="flex flex-row">
											<Select
												className="w-full"
												isClearable={true}
												placeholder="Nombre del servicio"
												onInputChange={(e) => {
													setSearchServicios(e);
												}}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														searchServicioData();
													}
												}}
												options={servicio?.map(
													(servicio) => ({
														value: servicio.Id,
														label: servicio.Nombre,
													})
												)}
											/>
										</div>
									</div>
									<div className="flex flex-col w-full">
										<CustomInput
											label={"Costo"}
											disabled={true}
											value={servicio()}
										/>
									</div>
								</div>
							</>
						}
					/>
				</div>
			</div>
		</Layout>
	);
};
export default Ventanilla;
