import React, { useContext, useState, useEffect } from "react";
import ServicioContext from "../../../context/Servicio/ServicioContext";
import SaveChangesBtn from "../../common/Buttons/saveChanges";
const FormServicio = ({ agregar, handdlePostPhoto }) => {
	const { selectedService, putServicio } = useContext(ServicioContext);
	useEffect(() => {}, []);
	const { Nombre, Costo, Descripcion, Cancelable } = selectedService;
	const [isPhoto, setIsPhoto] = useState(false)
	const [inpNombre, setInpNombre] = useState(Nombre);
	const [inpCosto, setInpCosto] = useState(Costo);
	const [inpDescripcion, setInpDescripcion] = useState(Descripcion);
	const [inpCancelable, setInpCancelable] = useState(Cancelable);
	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-4/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Nombre
					</label>
					<input
						onChange={(e) => {
							setInpNombre(e.target.value);
						}}
						value={inpNombre}
						type="text"
						placeholder="Nombre"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="w-1/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Costo
					</label>
					<input
						onChange={(e) => {
							setInpCosto(e.target.value);
						}}
						value={inpCosto}
						placeholder="Costo"
						type="number"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
			</div>
			<div className="flex flex-row w-full">
				<textarea
					onChange={(e) => {
						setInpDescripcion(e.target.value);
					}}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={inpDescripcion}
				/>
			</div>
			<div className="flex flex-row w-full my-8">
				<label class="relative inline-flex items-center cursor-pointer">
					<input
						defaultChecked={Cancelable}
						id="checkbox"
						onChange={(e) => setInpCancelable(e.target.checked)}
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
			<div className="flex flex-row w-full my-8">
				{handdlePostPhoto ? (
					<SaveChangesBtn
						handdleClick={(e) => {
							const formData = new FormData();
							const input = document.querySelector("#archivo");
							if(input.files[0] !== null){
								formData.append("archivo", input.files[0]);
								handdlePostPhoto(selectedService.Id, formData);		
							}
							
							const servicio = {
								Id: selectedService.Id,
								Nombre: inpNombre,
								Costo: Number(inpCosto),
								Descripcion: inpDescripcion,
								Cancelable: Boolean(inpCancelable),
							};
							putServicio(servicio);
							
						}}
						linkto={"/servicios"}
						text="Guardar"
					/>
				) : (
					<SaveChangesBtn
						handdleClick={(e) => {
							const servicio = {
								Id: selectedService.Id,
								Nombre: inpNombre,
								Costo: Number(inpCosto),
								Descripcion: inpDescripcion,
								Cancelable: Boolean(inpCancelable),
							};
							putServicio(servicio);
						}}
						linkto={"/servicios"}
						text="Guardar"
					/>
				)}
			</div>
		</div>
	);
};
export default FormServicio;
