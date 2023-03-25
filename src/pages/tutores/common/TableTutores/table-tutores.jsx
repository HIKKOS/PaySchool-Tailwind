import React, { useContext } from "react";
import TutoresContext from "../../../../context/Tutores/tutoresContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import AddElementBtn from "../../../common/Buttons/addElement";
import TheadTutor from "./TheadTutor";
import Swal from "sweetalert2";

const TableTutores = ({ data = [] }) => {
	const { setTutor, deleteTutor } = useContext(TutoresContext);
	data = data.map((tutor) => {
		return (
			<tr
				key={tutor.Id}
				className="border-b border-dashed  border-gray-400/50 my-10 text-lg text-gray-800"
			>
				<td className="py-4">{`${tutor.PrimerNombre} ${
					tutor.SegundoNombre ?? ""
				}`}</td>
				<td className="py-4">{`${tutor.ApellidoPaterno} ${tutor.ApellidoMaterno}`}</td>
				<td className="py-4">{`${
					tutor.Correo.length >= 10
						? `${tutor.Correo.slice(0, 10)}...`
						: tutor.Correo
				} `}</td>
				<td className="py-4">{`${tutor.Telefono}`}</td>
				<td className="py-4">{`${tutor.Direccion}`}</td>
				<td className="py-4">{`${tutor.RFC}`}</td>
				<td className="py-4 flex flex-row justify-center gap-2">
					<EditBtn
						handdleClick={(e) => {
							setTutor(tutor);
						}}
						linkto={"/Tutor/editar"}
					/>
					<DeleteBtn
						handdleClick={(e) => {
							Swal.fire({
								title: "¿Estas seguro?",
								text: "Esta acción no se podrá revertir",
								icon: "warning",
								showCancelButton: true,
								confirmButtonColor: "#3085d6",
								cancelButtonColor: "#d33",
								confirmButtonText: "Sí, eliminar",
								canelButtonText: "Cancelar",
							}).then((result) => {
								if (result.isConfirmed) {
									deleteTutor({ TutorId: tutor.Id });
								}
							});
						}}
					/>
					<AddElementBtn
						handleClick={(e) => {
							setTutor(tutor);
						}}
						linkto={"/Tutor/Agregar-tutorado"}
						text={"Tutorado"}
					/>
				</td>
			</tr>
		);
	});
	return (
		<table class=" w-full">
			<TheadTutor />
			<tbody className="mt-10">{data}</tbody>
		</table>
	);
};
export default TableTutores;
