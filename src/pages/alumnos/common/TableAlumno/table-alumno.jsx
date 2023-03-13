import React from "react";
import Swal from "sweetalert2";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import InfoButton from "../../../common/Buttons/infoButton";
import TheadAlumno from "./TheadAlumno";
const arr = [];
//0 datos generales
//1 AGREGAR TUTOR
//
const TableAlumno = ({ data = [], setAlumno, tipoTabla = 0, handdleIds }) => {
	data = data.map((alumno, i) => {
		return (
			<>
				<tr key={alumno.Id} className="border-b border-dashed  border-gray-400/50 my-10 text-lg text-gray-800">
					{tipoTabla === 1 ? (
						<td className="py-6 flex flex-row justify-center items-center">
							<input
								onChange={(e) => {
									if (e.target.checked) {
										arr.push(alumno.Id);
									} else {
										const index = arr.indexOf(alumno.Id);
										if (index > -1) {
											arr.splice(index, 1);
										}
									}
									handdleIds(arr);
								}}
								className="alumnoCheckbox"
								id={alumno.Id}
								type="checkbox"
							/>
						</td>
					) : null}
					<td className="">{`${alumno.PrimerNombre} ${alumno.SegundoNombre}`}</td>
					<td className="">{`${alumno.ApellidoPaterno} ${alumno.ApellidoMaterno}`}</td>
					<td className="">{`${alumno.Grado}`}</td>
					<td className="">{`${alumno.Grupo}`}</td>
					<td className="">{`${
						alumno.Genero === 0 ? "Masculino" : "Femenino"
					}`}</td >
					{tipoTabla === 1 ? (
						<td className=""> <p className="text-center">{`${
							alumno.Tutor ? `${Object.values(alumno.Tutor)[0]} ${Object.values(alumno.Tutor)[1]}` : "No asignado"
						}`}</p></td>
					) : null}
					
					{ tipoTabla === 0 ?
					 (
						<td className="py-4 flex flex-row items-center justify-center gap-2">
							<EditBtn
								handdleClick={(e) => {
									setAlumno(alumno);
								}}
								servicio={alumno}
								linkto={"/Alumnos/editar"}
							/>
							<InfoButton handleClick={e=> setAlumno(alumno)}  linkto={'/Alumnos/Servicios'} text={"Servicios"} />
							<DeleteBtn />
						</td>
					):null}
				</tr>
			</>
		);
	});
	return (
		<table class="w-full">
			<TheadAlumno tipoTabla={tipoTabla} />
			<tbody className="mt-10">{data}</tbody>
		</table>
	);
};
export default TableAlumno;
