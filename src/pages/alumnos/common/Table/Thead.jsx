import React from "react";
const Thead = ({titles = []}) => {
	const data = titles.map(
		( title ) => <th key={Symbol()} className="justify-center" scope="col">{title}</th>
	)
	return (
		<thead className="mb-10" >			
		
		  <tr className="text-gray-700  p-10">
			{data}
			{/* <th className="justify-center" scope="col">#</th>
			<th className="justify-center" scope="col">Nombre</th>
			<th className="justify-center" scope="col">Descripcion</th>
			<th className="justify-center" scope="col">Costo</th>
			<th className="justify-center" scope="col">Cancelable</th>
			<th className="justify-center" scope="col">Acciones</th> */}
		  </tr>
		</thead>
	);
};
export default Thead;
