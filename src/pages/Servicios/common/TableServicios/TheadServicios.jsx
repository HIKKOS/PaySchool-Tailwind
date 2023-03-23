import React from "react";
const TheadServicios = () => {
	return (
		<thead className="mb-10" >
			
		  <tr className="text-gray-700  p-10">
			<th className="justify-start" scope="col"><p className="text-start">#</p></th>
			<th className="justify-start" scope="col"><p className="text-start">Nombre</p></th>
			<th className="justify-start" scope="col"><p className="text-start">Frecuencia de Pago</p></th>
			<th className="justify-start" scope="col"><p className="text-start">Costo</p></th>
			<th className="justify-start" scope="col"><p className="text-start">Cancelable</p></th>
			<th className="justify-start" scope="col"><p className="text-center">Acciones</p></th>
		  </tr>
		</thead>
	);
};
export default TheadServicios;
