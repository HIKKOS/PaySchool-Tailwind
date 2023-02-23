import React, { useState, useContext } from "react";
import AlumnoContext from '../../context/Alumnos/alumnoContext'
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";

import FormAlumno from './common/forms/FormAlumno'
import AddElementBtn from "../common/Buttons/addElement";
import DeleteBtn from "../common/Buttons/delete";
import EditBtn from "../common/Buttons/edit";


const EditarAlumno = () => {
	const { selectedAlumno } = useContext(AlumnoContext);
	const [selectedIndex, setselectedIndex] = useState(3);
	if (!selectedAlumno) {
		location.href= '/Alumnos'
	} else { 
		document.title = `Editando: ${selectedAlumno.Nombres}`;
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-2/3 flex flex-row w-full">
					<Sidebar selectedIndex={selectedIndex} />
					<div className="flex flex-col items-center h-full w-full px-10">
						<TopNavBar />
						<Card
						head={'Editar'}
							editar={true}
							title={selectedAlumno.Nombre}
							body={
								<div className=" flex flex-row">
									<FormAlumno />
									<div className="w-full">							
									</div>
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
