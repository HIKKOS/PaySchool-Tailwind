import React, { useEffect, useState } from "react";

import EditBtn from "../Buttons/edit";
import DeleteBtn from "../Buttons/delete";
import Thead from "./Thead";
import ShowImgBtn from "../Buttons/img";

import { getAllServicios } from "../../../utils/getServicios";
const Table = () => {
	const [servicios, setServicios] = useState([]);
	useEffect(() => {
		getServicios();
	}, []);
	const getServicios = async () => {
		const servicios = await getAllServicios();
		setServicios(servicios);
	};
	const data = servicios.map((s, i) => {
		return (
			<tr className="text-lg text-gray-800">
				<td className="px-10 items-center">{i + 1}</td>			
				<td className="px-10">{s.Nombre}</td>
				<td className="px-10">{s.Descripcion}</td>
				<td className="px-10">{`$${s.Precio}`}</td>
				<td className="px-10">{s.Prioritario ? "Sí" : "No"}</td>
				<td className="px-10 flex flex-row">
					<EditBtn servicio={s}/>
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
