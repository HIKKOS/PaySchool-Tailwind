import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadFileButton from "../common/Buttons/uploadFile";
import AddElementBtn from "../common/Buttons/addElement";
import DeleteBtn from "../../pages/common/Buttons/delete";
import { baseURL } from "../../config";
import axios from "axios";
import ServicioContext from "../../context/Servicio/ServicioContext";
import { PRIVATE } from "../../config/router/paths";
const deletePhoto = async ({ ServicioId, photoId, slides, setSlides }) => {
	new Promise((resolve, reject) => {
		axios
			.delete(`${baseURL}/uploads/${ServicioId}/${photoId}`, {
				headers: {
					"x-token": localStorage.getItem("jwt"),
				},
			})
			.then((response) => {
			
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

function ImageGrid({ slides, handdleDeletePhoto, ids = [] }) {
	const { selectedService,getServicios } = useContext(ServicioContext);
    const navigate = useNavigate();
	return (
		<div className="grid grid-cols-3 gap-4">
			{slides.map((imageUrl, i) => (
				<div className="relative flex flex-col items-center ">
					<img
						src={imageUrl}
						alt=""
						id={slides.indexOf(imageUrl)}
						className=" rounded-xl w-full h-full object-cover"
					/>
					<div className="top-0 right-0 mt-4">
						<DeleteBtn
							handdleClick={() => {
								deletePhoto({
									ServicioId: selectedService.Id,
									photoId: ids[i],
                                    slides,
								}).then((response) => {
                                    navigate(`${PRIVATE}/Servicios`);
                                });
							}}
							text="eliminar"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default ImageGrid;
