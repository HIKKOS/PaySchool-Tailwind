import React, { useEffect, useState,useContext } from "react";
import AlumnoContext from "../../../../context/Alumnos/alumnoContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import TheadAlumno from "./TheadAlumno";

const TableAlumno = ({ data = [] }) => {		
	const { setAlumno } = useContext( AlumnoContext )	
	data = data.map((alumno, i) => {
		console.log(alumno);
		return (
			<tr key={alumno.Id} className="m-10 text-lg text-gray-800">			
				<td className=" ">{alumno.Nombres}</td>
				<td className="">{`${alumno.ApellidoPaterno} ${alumno.ApellidoMaterno}`}</td>
				<td className="">{`${alumno.Grado}`}</td>
				<td className="">{`${alumno.Grupo}`}</td>
				<td className="">{`${alumno.TutorId ? 'Sí' : 'No asignado'}` }</td>
				<td className=" flex flex-row justify-center gap-2">				
						<EditBtn handdleClick={e => {setAlumno(alumno)}} servicio={alumno} linkto={'/servicios/editar'}/>					
					<DeleteBtn />
				</td>
			</tr>
		);
	});
	return (
		<table class=" w-full">
			<TheadAlumno />
			<tbody className="mt-10">{data}</tbody>
		</table>
	);
};
export default TableAlumno;
