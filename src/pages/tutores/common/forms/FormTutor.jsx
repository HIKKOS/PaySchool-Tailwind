import React, { useContext, useState, useEffect } from "react";
import TutoresContext from "../../../../context/Tutores/tutoresContext";
import SaveChangesBtn from "../../../common/Buttons/saveChanges";
const FormTutor = ({ agregar }) => {
	const { selectedTutor, putTutor } = useContext(TutoresContext);
	const {
		PrimerNombre,
		SegundoNombre,
		ApellidoPaterno,
		ApellidoMaterno,
		Correo,
		Telefono,
		Direccion,
		RFC,
	} = selectedTutor;

	const [inpPrimerNombre, setInpPrimerNombre] = useState(PrimerNombre);
	const [inpSegundoNombre, setInpSegundoNombre] = useState(SegundoNombre);
	const [inpApellidoPaterno, setApellidoPaterno] = useState(ApellidoPaterno);
	const [inpApellidoMaterno, setApellidoMaterno] = useState(ApellidoMaterno);
	const [inpCorreo, setInpCorreo] = useState(Correo);
	const [inpTelefono, setInpTelefono] = useState(Telefono);
	const [inpDireccion, setInpDireccion] = useState(Direccion);
	const [inpRFC, setInpRFC] = useState(RFC);
	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Primer Nombre
					</label>
					<input
						onChange={(e) => {
							setInpPrimerNombre(e.target.value);
						}}
						value={inpPrimerNombre}
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
						Segundo Nombre
					</label>
					<input
						onChange={(e) => {
							setInpSegundoNombre(e.target.value);
						}}
						value={inpSegundoNombre}
						type="text"
						placeholder="Nombre"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
			</div>
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Apellido Paterno
					</label>
					<input
						onChange={(e) => {
							setApellidoPaterno(e.target.value);
						}}
						value={inpApellidoPaterno}
						placeholder="Costo"
						type="text"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Apellido Materno
					</label>
					<input
						onChange={(e) => {
							setApellidoMaterno(e.target.value);
						}}
						value={inpApellidoMaterno}
						placeholder="Costo"
						type="text"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
			</div>
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Correo
					</label>
					<input
						onChange={(e) => {
							setInpCorreo(e.target.value);
						}}
						value={inpCorreo}
						placeholder="Costo"
						type="email"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Telefono
					</label>
					<input
						onChange={(e) => {
							setInpTelefono(e.target.value);
						}}
						value={inpTelefono}
						placeholder="Costo"
						type="text"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="w-3/6">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						RFC
					</label>
					<input
						onChange={(e) => {
							setInpRFC(e.target.value);
						}}
						value={inpRFC}
						placeholder="Costo"
						type="text"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
			</div>
			<div className="w-full">
				<label
					for="base-input"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Direccion
				</label>
				<textarea
				onChange={(e) => {
					setInpDireccion(e.target.value);
				}}
					value={inpDireccion}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<div className="w-full">
				<label
					for="base-input"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Tutorados
				</label>
				<select
				onChange={(e) => {
					setInpDireccion(e.target.value);
				}}
				> 
				<option value="0">1</option></select>
			</div>
			<div className="flex flex-row w-full my-8">
				<SaveChangesBtn
					//! verificar genero no se actualiza
					handdleClick={(e) => {
						const alumno = {
							Id: selectedAlumno.Id,
							Nombres: `${`${inpNombre}`.replace(/\s+/g, "")} ${`${
								inpSegundoNombre || " "
							}`.replace(/\s+/g, "")}`,
							ApellidoPaterno: inpApellidoPaterno,
							ApellidoMaterno: inpApellidoMaterno,
							Grupo: `${inpGrupo}`.charAt(0),
						};
						putAlumno(alumno);
					}}
					linkto={"/Alumnos"}
					text="Guardar"
				/>
			</div>
		</div>
	);
};
export default FormTutor;
