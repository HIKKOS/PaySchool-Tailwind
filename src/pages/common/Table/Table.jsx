import React, { useEffect, useState,useContext } from "react";
import ServicioContext from "../../../context/Servicio/ServicioContext";
import EditBtn from "../Buttons/edit";
import DeleteBtn from "../Buttons/delete";
import Thead from "./Thead";

const Table = ({ servicios = [] }) => {		
	const { setServicio } = useContext( ServicioContext )	
	const data = servicios.map((servicios, i) => {
		return (
			<tr key={servicios.Id} className="text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>			
				<td className="px-10">{servicios.Nombre}</td>
				<td className="px-10">{servicios.Descripcion}</td>
				<td className="px-10">{`$${servicios.Precio}`}</td>
				<td className="px-10">{!servicios.Prioritario ? "Sí" : "No"}</td>
				<td className="px-10 flex flex-row">				
						<EditBtn handdleClick={e => {setServicio(servicios)}} servicio={servicios} linkto={'/servicios/editar'}/>					
					<DeleteBtn />
				</td>
			</tr>
		);
	});
	return (
		<table class="table-auto w-full">
			<Thead />

			<tbody>{data}</tbody>
		</table>
	);
};
export default Table;
