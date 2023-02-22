import React, { useEffect, useContext, useState } from "react";
import ServicioContext from "../../context/Servicio/ServicioContext";

import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Table from "../common/Table/Table";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
document.title = "Servicios";
const Servicios = () => {
	const { getServicios, servicios, totalServicios, pagination } = useContext(ServicioContext);
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(9)
	useEffect(() => {
		getServicios();
	}, []);
	const [selectedIndex, setselectedIndex] = useState(1);
	return (
		
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className='h-full flex flex-row w-full'>
				<Sidebar selectedIndex={selectedIndex} />
				<div className="flex flex-col items-center  h-full w-full px-10">
					<TopNavBar />
					<Card
						head={
							<>
								<h5 className="text-gray-700 text-2xl leading-tight mb-2">
									Servicios
								</h5>
								<div className="flex flex-row gap-5	">
									<p className="text-xl">Mostrar: </p>									
									<DropDown/>
								</div>
							</>
						}
						body={
							<>
								<Table servicios={ servicios } />
							</>
						}
					/>
					<Pagination  page={page} count={ (totalServicios / pagination.limit ) }/>
				</div>
			
			</div>
		
			<Footer/>
		</div>
	);
};
export default Servicios;
