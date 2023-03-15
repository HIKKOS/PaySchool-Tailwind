import React, { useEffect, useState, useContext } from "react";
import EditBtn from "../../../pages/common/Buttons/edit";
import DeleteBtn from "../../../pages/common/Buttons/delete";
import { baseURL } from "../../../config";
import axios from "axios";
import Swal from "sweetalert2";
const getExpireDate = (diasRestantes) => {};

const Thead = () => {
	return (
		<thead className="mb-10">
			<tr className="text-gray-700  p-10">
				<th className="px-5" scope="col">
					<p className="text-left">Nombre</p>
				</th>
				<th className="px-5" scope="col">
					<p className="text-left">Dias restantes</p>
				</th>
				<th className="px-5" scope="col">
					<p className="text-left">Cobrado</p>
				</th>
				<th className="px-5" scope="col">
					<p className="text-left">Expirado</p>
				</th>
				<th scope="col">
					<p className="text-center">Expira hasta</p>
				</th>
				<th scope="col">
					<p className="text-center">Acciones</p>
				</th>
			</tr>
		</thead>
	);
};
const TableServicios = ({
	servicios = [],
	tipoTabla = 0,
	setServicio,
	alumno,
}) => {
	const [serviciosAlumno, setServiciosAlumno] = useState(servicios);
	const data = serviciosAlumno.map((servicio, i) => {
		const fecha = new Date(servicio.FechaExpiracion).toISOString();
		const fechaCompleta = `${fecha.split("-")[0]}/${fecha.split("-")[1]}/${fecha
			.split("-")[2]
			.substring(0, 2)}`;
		return (
			<tr key={servicio.Id} className="m-10 text-lg text-gray-800">
				<td>
					<p className="text-start">{servicio.Nombre}</p>
				</td>
				<td>
					<p className="text-start">{servicio.DiasRestantes}</p>
				</td>
				<td>
					<p className="text-start">{`$${servicio.Costo}`}</p>
				</td>
				<td>
					<p className="text-start">{servicio.Expirado ? "Sí" : "No"}</p>
				</td>
				<td>
					<p className="text-start">{`${fechaCompleta}`}</p>
				</td>
				<td className="px-10 flex flex-row justify-center gap-2">
					{tipoTabla === 1 ? null : (
						<EditBtn
							text="owo"
							handdleClick={(e) => {
								setServicio(servicio);
							}}
							linkto={"/servicio/editar"}
						/>
					)}
					<DeleteBtn
						handdleClick={(e) =>
							Swal.fire({
								title: "Quitando servicio",
								text: "¿Estás seguro?",
								icon: "warning",
								showCancelButton: true,
								confirmButtonColor: "#3085d6",
								cancelButtonColor: "#d33",
								confirmButtonText: "Aceptar",
								cancelButtonText: "Cancelar",
							}).then((result) => {
								if (result.isConfirmed) {
									axios
										.delete(`${baseURL}/alumnos/${servicio.Id}/${alumno.Id}`, {
											headers: {
												"x-token": localStorage.getItem("jwt").toString(),
											},
										})
										.then((res) => {
											setServiciosAlumno(res.data)
										})
										.catch((res) => {
											Swal.fire({
												title: "Error",
												icon: "warning",
											});
											console.log(res);
										});
								}
							})
						}
						text={tipoTabla === 1 ? "Quitar" : tipoTabla ? 0 : "Borrar"}
					/>
				</td>
			</tr>
		);
	});
	return (
		<table class="w-full">
			<Thead />
			<tbody>{data}</tbody>
		</table>
	);
};
export default TableServicios;
