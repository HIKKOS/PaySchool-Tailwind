import React, { useContext } from "react";
import AlumnoContext from "../../../../context/Alumnos/alumnoContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import Thead from "./Thead";

const Table = ({ data = [] }) => {
	const { setAlumno } = useContext(AlumnoContext);
	const body = data.map((element, i) => {
		return (
			<tr key={element.Id} className="m-10 text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>
				<td className="px-10">{element.Nombres}</td>
				<td className="px-10">{`${element.ApellidoPaterno} ${element.ApellidoMaterno}`}</td>
				<td className="px-10">{`${element.Grado}-${`${(element.Grupo)}`.toUpperCase()}`}</td>
				<td className="px-10">{element.TutorId ? "Sí" : "No Asignado"}</td>
				<td className="px-10 flex flex-row justify-center gap-2">
					<EditBtn
						handdleClick={(e) => {
							console.log(element);
							setAlumno(element);
						}}
						linkto={"/Alumnos/editar"}
					/>
					<DeleteBtn />
				</td>
			</tr>
		);
	});
	return (
		<table class=" w-full">
			<Thead />
			<tbody>{body}</tbody>
		</table>
	);
};
export default Table;
