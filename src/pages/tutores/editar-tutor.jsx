import React, { useState, useContext } from "react";
import TutoresContext from '../../context/Tutores/tutoresContext'
import TableAlumno from "../alumnos/common/TableAlumno/table-alumno";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import FormTutor from './common/forms/FormTutor'



const EditarTutor = () => {
	const { selectedTutor, tutorados } = useContext( TutoresContext );
	const [selectedIndex, setSelectedIndex] = useState(3);
	if (!selectedTutor) {
		location.href= '/Tutores'
	} else { 
		document.title = `Editando: ${selectedTutor.PrimerNombre}`;
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
					<Sidebar selectedIndex={selectedIndex} />
					<div className="flex flex-col items-center h-full w-full px-10">
						<TopNavBar />
						<Card
						goBack={'/Tutores'}
						head={'Editar'}
							editar={true}
							title={selectedTutor.PrimerNombre}
							body={
								<>
									<div className=" flex flex-row">
										<FormTutor />
									</div>
									<TableAlumno data={tutorados}/>
								</>
							}
						/>
					</div>
				</div>
			</div>
		);
/* 	} */
						}
};
export default EditarTutor;
