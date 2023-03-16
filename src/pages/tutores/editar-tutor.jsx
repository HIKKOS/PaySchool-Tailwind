import React, { useState, useContext } from "react";
import TutoresContext from "../../context/Tutores/tutoresContext";
import SaveChangesBtn from "../common/Buttons/saveChanges";
import TableTutorados from "../tutores/common/Table/table-tutorados";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import Footer from "../common/Footer/Footer";
import TopNavBar from "../common/topBar";
import FormTutor from "./common/forms/FormTutor";

const EditarTutor = () => {
	const { selectedTutor, putTutorados, tutorados } = useContext(TutoresContext);

	if (!selectedTutor) {
		location.href = "/Tutores";
	} else {
		document.title = `Editando: ${selectedTutor.PrimerNombre}`;
		return (
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900  h-[150vh]">
				<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false}/>
					<div className="flex flex-row h-full">
						<Sidebar selectedIndex={2} />
						<div className="mt-2 flex flex-col items-center h-full w-full px-10">
							<Card
							
								goBack={"/Tutores"}
								head={"Editar"}
								editar={true}
								title={selectedTutor.PrimerNombre}
								body={
									<>
										<div className="flex flex-row">
											<FormTutor />
										</div>
									    {(tutorados.length === 0) ? null: 
											<TableTutorados contextHanddler={{ putTutorados, selectedTutor }}  data={tutorados} />
										}
										
									</>
								}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
		/* 	} */
	}
};
export default EditarTutor;
