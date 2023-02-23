import React from "react";
const Thead = ({titles = []}) => {

	return (
		<thead className="mb-10" >			
		
		  <tr className="text-gray-700  p-10">
			<th className="px-5" scope="col"><p className="text-left">Nombre</p></th>
			<th className="px-5" scope="col"><p className="text-left">Descripcion</p></th>
			<th className="px-5" scope="col"><p className="text-left">Costo</p></th>
			<th className="px-5" scope="col"><p className="text-left">Cancelable</p></th>
			<th scope="col"><p className="text-center">Acciones</p></th>
		  </tr>
		</thead>
	);
};
export default Thead;
