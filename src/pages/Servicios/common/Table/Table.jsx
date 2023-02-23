import React, { useContext } from "react";
import ServicioContext from "../../../../context/Servicio/ServicioContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import Thead from "./Thead";

const Table = ({ data = [] }) => {
	const { setServicio } = useContext(ServicioContext);
	const body = data.map((element, i) => {
		return (
			<tr key={element.Id} className="m-10 text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>
				<td className="px-10">{element.Nombre}</td>
				<td className="px-10">{element.Descripcion}</td>
				<td className="px-10">{`$${element.Costo}`}</td>
				<td className="px-10">{element.Cancelable ? "Sí" : "No"}</td>
				<td className="px-10 flex flex-row justify-center gap-2">
					<EditBtn
						handdleClick={(e) => {									
							setServicio(element);
						}}					
						linkto={"/servicios/editar"}
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
