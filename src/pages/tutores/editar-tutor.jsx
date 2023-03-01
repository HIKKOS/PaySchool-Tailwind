import React, { useState, useContext } from "react";
import TutoresContext from '../../context/Tutores/tutoresContext'
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import FormAlumno from './common/forms/FormAlumno'



const EditarAlumno = () => {
	const { selectedTutor } = useContext(TutoresContext);
	const [selectedIndex, setSelectedIndex] = useState(3);
	if (!selectedTutor) {
		location.href= '/Tutor'
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
							title={selectedAlumno.PrimerNombre}
							body={
								<div className=" flex flex-row">
									<FormAlumno />
								</div>
							}
						/>
					</div>
				</div>
			</div>
		);
/* 	} */
						}
};
export default EditarAlumno;
