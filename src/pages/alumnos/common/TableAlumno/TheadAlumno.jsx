import React from "react";
const TheadAlumno = ({ tipoTabla = 0 }) => {
	return (
		<thead className="mb-10">
			<tr className="text-gray-700  p-10">
				{tipoTabla === 1 ? (
					<th scope="col">
						<p className="text-center">Seleccionar</p>
					</th>
				) : null}
				<th scope="col">
					<p className="text-left">Nombres</p>
				</th>
				<th scope="col">
					<p className="text-left">Apellidos</p>
				</th>
				<th scope="col">
					<p className="text-left">Grado</p>
				</th>
				<th scope="col">
					<p className="text-left">Grupo</p>
				</th>
				<th scope="col">
					<p className="text-left">Genero</p>
				</th>
				{tipoTabla === 0 ? (
					<>
						<th scope="col">
							<p className="text-center">Acciones</p>
						</th>
					</>
				) : null}
				{tipoTabla === 1 ?<th scope="col">
					<p className="text-center">Tutor</p>
				</th> : null}
				
			</tr>
		</thead>
	);
};
export default TheadAlumno;
