import React, { useEffect, useState } from "react";


import FormAgregarServicio from "./common/formAgreagar";
import Sidebar from "../../pages/common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Carrousel from "../common/carrousel";
const AgregarServicio = () => {
    const [selectedIndex, setselectedIndex] = useState(1);
    return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-2/3 flex flex-row w-full">
				<Sidebar selectedIndex={selectedIndex} />
				<div className="h-full w-full">
					<TopNavBar />
					<Card
						editar={true}
						title={'Agregar Servicio'}
						body={	
							<div className=" flex flex-row">							
														
                                <FormAgregarServicio />
							</div>																																			
						} 
					/>
				</div>
			</div>
		</div>
	);
}
export default AgregarServicio