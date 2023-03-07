import React, { useEffect, useState,useContext } from "react";
import ServicioContext from "../../../../context/Servicio/ServicioContext";
import EditBtn from '../../../common/Buttons/edit'
import DeleteBtn from "../../../common/Buttons/delete";
import TheadServicios from "./TheadServicios";

const TableServicios = ({ servicios = [],tipoTabla = 0, setServicio }) => {	
	const data = servicios.map((servicio, i) => {
		return (
			<tr key={servicio.Id} className="m-10 text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>			
				<td className="px-10">{servicio.Nombre}</td>
				<td className="px-10">{servicio.Descripcion}</td>
				<td className="px-10">{`$${servicio.Costo}`}</td>
				<td className="px-10">{servicio.Cancelable ? "Sí" : "No"}</td>
				<td className="px-10 flex flex-row justify-center gap-2">	
				{tipoTabla === 1 ? null : 		
						<EditBtn text="owo" handdleClick={e => {setServicio(servicio)} } linkto={'/servicio/editar'}/>	}				
					<DeleteBtn text={tipoTabla === 1 ? 'Quitar' : tipoTabla ? 0 :'Borrar'} />
				</td>
			</tr>
		);
	});
	return (
		<table class=" w-full">
			<TheadServicios />
			<tbody>{data}</tbody>
		</table>
	);
};
export default TableServicios;
