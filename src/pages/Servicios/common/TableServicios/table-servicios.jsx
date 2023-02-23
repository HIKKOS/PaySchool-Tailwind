import React, { useEffect, useState,useContext } from "react";
import ServicioContext from "../../../../context/Servicio/ServicioContext";
import EditBtn from '../../../common/Buttons/edit'
import DeleteBtn from "../../../common/Buttons/delete";
import TheadServicios from "./TheadServicios";

const TableServicios = ({ servicios = [] }) => {		
	const { setServicio } = useContext( ServicioContext )	
	const data = servicios.map((servicios, i) => {
		return (
			<tr key={servicios.Id} className="m-10 text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>			
				<td className="px-10">{servicios.Nombre}</td>
				<td className="px-10">{servicios.Descripcion}</td>
				<td className="px-10">{`$${servicios.Costo}`}</td>
				<td className="px-10">{servicios.Cancelable ? "Sí" : "No"}</td>
				<td className="px-10 flex flex-row justify-center gap-2">				
						<EditBtn handdleClick={e => {setServicio(servicios)}} servicio={servicios} linkto={'/servicios/editar'}/>					
					<DeleteBtn />
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
