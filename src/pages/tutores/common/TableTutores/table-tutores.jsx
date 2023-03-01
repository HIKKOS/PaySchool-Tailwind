import React, { useEffect, useState,useContext } from "react";
import TutoresContext from "../../../../context/Tutores/tutoresContext";
import EditBtn from "../../../common/Buttons/edit";
import DeleteBtn from "../../../common/Buttons/delete";
import TheadTutor from "./TheadTutor";

const TableTutores = ({ data = [] }) => {		
	const { setTutor } = useContext( TutoresContext )	
	data = data.map((tutor, i) => {
		console.log(tutor);
		return (
			<tr key={tutor.Id} className="m-10 text-lg text-gray-800">			
				<td className=" ">{`${tutor.PrimerNombre} ${tutor.SegunoNombre ?? ''}`}</td>
				<td className="">{`${tutor.ApellidoPaterno} ${tutor.ApellidoMaterno}`}</td>
				<td className="">{`${tutor.Correo}`}</td>
				<td className="">{`${tutor.Telefono}`}</td>
				<td className="">{`${tutor.Direccion}`}</td>
				<td className="">{`${tutor.RFC}` }</td>
				<td className=" flex flex-row justify-center gap-2">				
						<EditBtn handdleClick={e => {setTutor(tutor)}} servicio={tutor} linkto={'/Tutor/editar'}/>					
					<DeleteBtn />
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
