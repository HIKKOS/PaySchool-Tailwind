import React, {useState} from 'react'
import SaveChangesBtn from '../../../common/Buttons/saveChanges'
import axios from 'axios'
import { baseURL } from '../../../../config'
import CustomInput from '../../../common/input'
const postTutor = (data) => {
	axios.post(`${baseURL}/tutores`, data,{
		headers: {
			'x-token': localStorage.getItem('jwt')
		}
	}).then((res) => {
		console.log(res);
	}).catch((err) => {
		console.log(err);
	}
	)
}
const FormAgregarTutor = () => {
	const [inpPrimerNombre, setInpPrimerNombre] = useState();
	const [inpSegundoNombre, setInpSegundoNombre] = useState();
	const [inpApellidoPaterno, setApellidoPaterno] = useState();
	const [inpApellidoMaterno, setApellidoMaterno] = useState();
	const [inpCorreo, setInpCorreo] = useState();
	const [inpTelefono, setInpTelefono] = useState();
	const [inpDireccion, setInpDireccion] = useState();
	const [inpRFC, setInpRFC] = useState();
	const [inpPass, setInpPass] = useState();
	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-3/6">
					<CustomInput
						handdleChange={(e) => {
							setInpPrimerNombre(e.target.value);
						}}
						label="Primer Nombre"
						placeholder={"Primer Nombre"}
						value={inpPrimerNombre}
						isRequired={true}
						type={"text"}
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
						placeholder="Segundo Nombre"
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
						Apellido Materno
					</label>
					<input
						onChange={(e) => {
							setApellidoMaterno(e.target.value);
						}}
						value={inpApellidoMaterno}
						placeholder="Apellido Materno"
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
						placeholder="Correo"
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
						placeholder="Telefono"
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
						placeholder="RFC"
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
					placeholder="Direccion"
					value={inpDireccion}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<div className="flex flex-row w-full gap-2 mb-6">
				<div className="w-full">
					<label
						for="base-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Contraseña
					</label>
					<input
						onChange={(e) => {
							setInpPass(e.target.value);
						}}asd
						value={inpPass}
						placeholder="Contraseña"
						type="password"
						id="base-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				
				
			</div>
			<div className="w-full">
				<div className="flex flex-row w-full my-8">
					<SaveChangesBtn
						handdleClick={() => {
							const tutor = {
								PrimerNombre: inpPrimerNombre,
								SegundoNombre: inpSegundoNombre,
								ApellidoPaterno: inpApellidoPaterno,
								ApellidoMaterno: inpApellidoMaterno,
								Correo: inpCorreo,
								Telefono: inpTelefono,
								RFC: inpRFC,
								Direccion: inpDireccion,
								PasswordTutor: inpPass,
							};
							const values = Object.values(tutor);
							const keys = Object.keys(tutor);
							values.map((v) => {
								if (!v) {
									Swal.fire({
										icon: "error",
										title: "Todos los campos son obligatorios",										
									})
								}
							});
							values.every((v) => v) &&	
							postTutor(tutor)
						}}
						text="Guardar"
					/>
				</div>
			</div>
		</div>
	);
}
export default FormAgregarTutor