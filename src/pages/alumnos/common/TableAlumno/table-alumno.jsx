import React, { useEffect, useState, useContext } from "react";
import AlumnoContext from "../../../../context/Alumnos/alumnoContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import TheadAlumno from "./TheadAlumno";
const arr = [];
const TableAlumno = ({ data = [], setAlumno, paraAgreagarTutor = false, handdleIds }) => {
	
	data = data.map((alumno, i) => {
		return (
			<>
				<tr key={alumno.Id} className="my-10 text-lg text-gray-800">
					{paraAgreagarTutor ? (
						<td className="h-full flex flex-row justify-center">
							<input
								onChange={(e) => {
									if (e.target.checked) {
										arr.push(alumno.Id)
									} else {
										const index = arr.indexOf(alumno.Id);
										if (index > -1) {
											arr.splice(index, 1);											
										}
									}
									handdleIds(arr)
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
					}`}</td>
					{!paraAgreagarTutor ? (
						<td className="">{`${alumno.TutorId ? "Sí" : "No asignado"}`}</td>
					) : null}

					{!paraAgreagarTutor ? (
						<td className=" flex flex-row justify-center gap-2">
							<EditBtn
								handdleClick={(e) => {
									setAlumno(alumno);
								}}
								servicio={alumno}
								linkto={"/Alumnos/editar"}
							/>
							<DeleteBtn />
						</td>
					) : null}
				</tr>
			</>
		);
	});
	return (
		<table class=" w-full">
			<TheadAlumno paraAgreagarTutor={paraAgreagarTutor} />
			<tbody className="mt-10">{data}</tbody>
		</table>
	);
};
export default TableAlumno;
