import React, { useState, useContext } from "react";
import AlumnoContext from '../../context/Alumnos/alumnoContext'
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import FormAlumno from './common/forms/FormAlumno'


const EditarAlumno = () => {
	const { selectedAlumno } = useContext(AlumnoContext);
	const [selectedIndex, setselectedIndex] = useState(3);
	if (!selectedAlumno) {
		location.href= '/Alumnos'
	} else { 
		document.title = `Editando: ${selectedAlumno.PrimerNombre}`;
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false}/>
					<div className="flex flex-row h-full">
					<Sidebar selectedIndex={selectedIndex} />
						<div className="mt-2 flex flex-col items-center h-full w-full px-5">
							<Card
							goBack={'/Alumnos'}
							head={'Editar'}
								editar={true}
								title={selectedAlumno.Nombres}
								body={
									<div className=" flex flex-row">
										<FormAlumno />
									</div>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
/* 	} */
						}
};
export default EditarAlumno;
