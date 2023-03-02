import React from "react";
const TheadAlumno = ({ paraAgreagarTutor = false }) => {
	return (
		<thead className="mb-10">
			<tr className="text-gray-700  p-10">
				{paraAgreagarTutor ? (
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
				{!paraAgreagarTutor ? 
					<>
						<th scope="col">
							<p className="text-left">Tutor</p>
						</th>
						<th scope="col">
							<p className="text-center">Acciones</p>
						</th>
					</>
				 : null}
			</tr>
		</thead>
	);
};
export default TheadAlumno;
