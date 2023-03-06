import React from "react";
import Swal from 'sweetalert2'
import TheadAlumno from "./Thead";
import DeleteBtn from "../../../common/Buttons/delete";
const TableTutorados = ({ data = [], contextHanddler}) => {
	const {putTutorados, selectedTutor} = contextHanddler
	data = data.map((alumno, i) => {
		return (
			<>
				<tr key={alumno.Id} className="my-10 text-lg text-gray-800">
					<td className=""><p className="text-start">{`${alumno.PrimerNombre} ${alumno.SegundoNombre}`}</p></td>
					<td className=""><p className="text-start">{`${alumno.ApellidoPaterno} ${alumno.ApellidoMaterno}`}</p></td>
					<td className=""><p className="text-start">{`${alumno.Grado} - ${alumno.Grupo}`}</p></td>
					<td className=""><p className="text-start">{`${
						alumno.Genero === 0 ? "Masculino" : "Femenino"
					}`}</p></td>	
					
					<td>
						<div className="flex flex-row gap-2">
							<DeleteBtn handdleClick={e => {
								Swal.fire({
									title: 'Quitando Tutordo',
									text: "¿Estás seguro?",
									icon: 'warning',
									showCancelButton: true,
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: 'Aceptar',
									cancelButtonText:'Cancelar'
									
								  }).then((result) => {
									if (result.isConfirmed) {
										putTutorados(alumno, selectedTutor.Id) 
									  Swal.fire(
										'Eliminado!',
										'',
										'success'
									  )
									}
								  })
						
							}} text="Quitar"/>
						</div>
					</td>
				</tr>
			</>
		);
	});
	return (
		<table class="w-full">
			<thead className="mb-10">
				<tr className="text-gray-700  p-10">
				
					<th className="justify-start" scope="col">
						<p className="text-start">Nombres</p>
					</th>
					<th className="justify-center" scope="col">
						<p className="text-start">Apellidos</p>
					</th>
					<th className="justify-center" scope="col">
						<p className="text-start">Grado - Grupo</p>
					</th>
				
					<th className="justify-center" scope="col">
						<p className="text-start">Genero</p>
					</th>
					<th className="justify-center" scope="col">
						<p className="text-start">Acciones</p>
					</th>
				</tr>
			</thead>
			<tbody className="mt-10">{data}</tbody>
		</table>
	);
};
export default TableTutorados;
