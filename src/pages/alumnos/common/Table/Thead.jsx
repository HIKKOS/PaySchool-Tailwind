import React from "react";
const Thead = ({titles = []}) => {
	return (
		<thead className="mb-10" >					
		  <tr className="text-gray-700 p-10">
			 <th className="justify-center" scope="col">#</th>
			<th className="justify-center" scope="col">Nombres</th>
			<th className="justify-center" scope="col">Apellidos</th>
			<th className="justify-center" scope="col">Grado - Grupo</th>
			<th className="justify-center" scope="col">Tutor</th>
			<th className="justify-center" scope="col">Acciones</th>
		  </tr>
		</thead>
	);
};
export default Thead;
