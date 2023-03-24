import React, { useState, useContext, useEffect } from "react";
import { Modal } from "flowbite";
import { useNavigate } from "react-router-dom";
import ServicioContext from "../../context/Servicio/ServicioContext";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../../pages/common/Card";
import TopNavBar from "../../pages/common/topBar";
import { baseURL } from "../../config";
import axios from "axios";
import { PRIVATE } from "../../config/router/paths";
import ImageGrid from "./ImgGrid";
import UploadFileButton from "../common/Buttons/uploadFile";
import AddElementBtn from "../common/Buttons/addElement";
import SaveChangesBtn from "../common/Buttons/saveChanges";
const deletePhoto = async ({ ServicioId, photoId, slides, setSlides }) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${baseURL}/uploads/${ServicioId}/${photoId}`, {
				headers: {
					"x-token": localStorage.getItem("jwt"),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					const index = slides.indexOf(photoId);
					if (index > -1) {
						index.splice(index, 1);
					}
					setSlides([...slides]);
					location.href = `${PRIVATE}/Servicios`;
				}
				resolve(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
};

const uploadImage = async ({ ServicioId, formData }) => {
	return new Promise((resolve, reject) => {
		try {
			axios
				.post(`${baseURL}/uploads/${ServicioId}`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
						"x-token": localStorage.getItem("jwt"),
					},
				})
				.then((response) => {
					console.log(response.data);
					resolve(response.data);
				});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

const EditarImagenes = () => {
	const { selectedService, postPhoto, getById, delPhoto, putServicio } =
		useContext(ServicioContext);
	const { Id } = selectedService;
	{
		console.log(selectedService);
	}
	const navigate = useNavigate();
	const [slides, setSlides] = useState(
		selectedService.ImgPaths.map(
			(s) => `${baseURL}/uploads/${selectedService.Id}/${s}`
		)
	);
	console.log(slides);
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
					<Sidebar selectedIndex={3} />
					<div className="mt-2 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/servicio/editar"}
							head={
								<div className="flex flex-row justify-between">
									{selectedService.Nombre}
									<UploadFileButton />
								</div>
							}
							editar={true}
							title={"Imagenes"}
							body={
								<>
									<ImageGrid
										handdleDeletePhoto={() => {}}
										slides={slides}
										ids={selectedService.ImgPaths}
									/>

									<div className="flex flex-row px-10 items-center justify-center">
										<SaveChangesBtn
											text="Guardar"
											handdleClick={() => {
												const file =
													document.getElementById(
														"Imagen"
													).files;
		
												if (file[0] !== undefined) {
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
													}).then((response) => {
														console.log(response);
														const newSlides = [
															...slides,
														];
														newSlides.push(
															`${baseURL}/uploads/${selectedService.Id}/${response}`
														);
														setSlides(newSlides);
														navigate(
															`${PRIVATE}/servicio/editar`
														);
													});
												}
											}}
										/>
									</div>
								</>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
//export default FormAgregarServicio;

export default EditarImagenes;
