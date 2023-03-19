import React from "react";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import TheadServicios from "./TheadServicios";

const TablePagos = ({ pagos = [] }) => {
	const data = pagos.map((servicio, i) => {
		return (
			<tr
				key={servicio.Id}
				className=" row-auto border-b border-dashed  border-gray-400/50 my-10 text-lg text-gray-800"
			>
				<td className="py-4">{i + 1}</td>
				<td className="py-4">{servicio.Nombre}</td>
				<td className="py-4">{servicio.Descripcion}</td>
				<td className="py-4">{`$${servicio.Costo}`}</td>
				<td className="py-4">{servicio.Cancelable ? "Sí" : "No"}</td>
				<td className="py-4 flex flex-row items-center  justify-center gap-2">
					{tipoTabla === 1 ? null : (
						<EditBtn
							text="Editar"
							handdleClick={(e) => {
								setServicio(servicio);
							}}
							linkto={"/servicio/editar"}
						/>
					)}
					<DeleteBtn
						text={
							tipoTabla === 1
								? "Quitar"
								: tipoTabla
								? 0
								: "Borrar"
						}
					/>
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
