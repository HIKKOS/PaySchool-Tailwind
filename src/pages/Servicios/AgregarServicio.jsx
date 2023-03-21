import React, { useEffect, useState } from "react";


import FormAgregarServicio from "./common/formAgreagar";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import DeleteBtn from "../common/Buttons/delete";
import Carrousel from "../common/carrousel";
import { PRIVATE } from "../../config/router/paths";


const AgregarServicio = () => {
    const [selectedIndex, setselectedIndex] = useState(1);
    return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
					<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
				<Sidebar selectedIndex={selectedIndex} />
					<div className="mt-2 flex flex-col items-center h-full w-full px-10">
						<Card
							goBack={"/Servicios"}
							head={"Agregando Servicio"}
							editar={true}
						
							body={
								<div className=" flex flex-col">
									<FormAgregarServicio  />
									<div className="flex flex-row pt-5  justify-center">
											
										</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AgregarServicio