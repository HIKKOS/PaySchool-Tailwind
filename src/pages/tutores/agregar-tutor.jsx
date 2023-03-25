import React from "react";

import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import Footer from "../common/Footer/Footer";
import TopNavBar from "../common/topBar";
import FormAgregarTutor from "./common/forms/formAgreagar";

const AgregarTutor = () => {
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900  h-[150vh]">
			<div className="h-full flex flex-col w-full">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
					<Sidebar selectedIndex={2} />
					<div className="mt-2 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Tutores"}
							head={"Agregar Tutor"}
							editar={true}
							body={
								<div className="flex flex-row">
									<FormAgregarTutor />
								</div>
							}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default AgregarTutor;
