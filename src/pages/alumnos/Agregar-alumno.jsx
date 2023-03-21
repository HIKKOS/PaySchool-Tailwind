document.title = "Agregar Alumno";
import React, { useState, useContext } from "react";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import FormAlumno from './common/forms/formAgreagar'
import { PRIVATE } from "../../config/router/paths";


const AgregarAlumno = () => {
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
				<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false}/>
					<div className="flex flex-row h-full">
					<Sidebar selectedIndex={2} />
						<div className="mt-2 flex flex-col items-center h-full w-full px-5">
							<Card
							goBack={"/Alumnos"}
							head={'Agregar alumno'}
								editar={true}
								
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

						
};
export default AgregarAlumno;
