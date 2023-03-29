import React from "react";
const TheadPagos = () => {
	return (
		<thead className="mb-10">
			<tr className="text-gray-700  p-10">
				<th className="justify-start" scope="col">
					<p className="text-start">Folio</p>
				</th>
				<th className="justify-start" scope="col">
					<p className="text-start">Fecha de Pago</p>
				</th>
				<th className="justify-start" scope="col">
					<p className="text-start">Servicio</p>
				</th>
				<th className="justify-start" scope="col">
					<p className="text-start">Monto</p>
				</th>
				<th className="justify-start" scope="col">
					<p className="text-start">Tutor</p>
				</th>
				<th className="justify-start" scope="col">
					<p className="text-start">Alumno</p>
				</th>
			</tr>
		</thead>
	);
};
const TablePagos = ({ pagos = [] }) => {
	const data = pagos.map((servicio, i) => {
		return (
			<tr
				key={servicio.Id}
				className=" row-auto border-b border-dashed  border-gray-400/50 my-10 text-lg text-gray-800"
			>
				<td className="py-4">{servicio.folio}</td>
				<td className="py-4">
					{servicio.fechaPago.split("-")[0].substring(0, 4)}-
					{servicio.fechaPago.split("-")[1]}-
					{servicio.fechaPago.split("-")[2].substring(0, 2)}
				</td>
				<td className="py-4">{servicio.servicio}</td>
				<td className="py-4">{`$${servicio.monto}`}</td>
				<td className="py-4">{servicio.Tutor}</td>
				<td className="py-4">{servicio.alumno}</td>
			</tr>
		);
	});
	return (
		<table class=" w-full">
			<TheadPagos />
			<tbody>{data}</tbody>
		</table>
	);
};
export default TablePagos;
