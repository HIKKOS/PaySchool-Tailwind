import React, { useContext, useState, useEffect } from "react";
import AlumnoContext from "../../../../context/Alumnos/alumnoContext";
import SaveChangesBtn from "../../../common/Buttons/saveChanges";
const FormAlumno = ({ agregar }) => {
	const { selectedAlumno, putAlumno } = useContext(AlumnoContext);
	const { PrimerNombre,SegundoNombre, ApellidoPaterno, ApellidoMaterno, Grado, Grupo, Genero } =
		selectedAlumno;
	const [inpNombre, setInpNombre] = useState(PrimerNombre);
	const [inpSegundoNombre, setInpSegundoNombre] = useState(SegundoNombre);
	const [inpApellidoPaterno, setApellidoPaterno] = useState(ApellidoPaterno);
	const [inpApellidoMaterno, setApellidoMaterno] = useState(ApellidoMaterno);
	const [inpGrado, setInpGrado] = useState(Grado);
	const [inpGrupo, setInpGrupo] = useState(Grupo);
	const [inpGenero, setInpGenero] = useState(Genero);
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
								setInpNombre(e.target.value);
							}}
							value={inpNombre}
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
						placeholder="Apellido Paterno"
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
						Apellido Paterno
					</label>
					<input
						onChange={(e) => {
							setApellidoMaterno(e.target.value);
						}}
						value={inpApellidoMaterno}
						placeholder="Apellido Paterno"
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
						Grado
					</label>
					<input
						onChange={(e) => {
							setInpGrado(e.target.value);
						}}
						value={inpGrado}
						placeholder="Grado"
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
						Grupo
					</label>
					<input
						onChange={(e) => {
							setInpGrupo(e.target.value);
						}}
						value={inpGrupo}
						placeholder="Grupo"
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
						Genero
					</label>
					<select
						value={inpGenero}
						onChange={(e) => {
							setInpGenero(Number(e.target.value));						
						}}
						placeholder="Genero"
						type="text"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option defaultChecked={inpGenero === 1 ? true : false} value="0">
							Masculino
						</option>
						<option defaultChecked={inpGenero === 0 ? true : false} value="1">
							Femenino
						</option>
					</select>
				</div>
			</div>

			<div className="flex flex-row w-full my-8">
				<SaveChangesBtn
				//! verificar genero no se actualiza
					handdleClick={(e) => {
						const alumno = {
							Id: selectedAlumno.Id,
							PrimerNombre: inpNombre,
							SegundoNombre: inpSegundoNombre,
							ApellidoPaterno: inpApellidoPaterno,
							ApellidoMaterno: inpApellidoMaterno,
							Genero: !(Boolean(inpGenero)),
							Grado: Number(inpGrado),
							Grupo: (`${inpGrupo}`.charAt(0)),
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
export default FormAlumno;
