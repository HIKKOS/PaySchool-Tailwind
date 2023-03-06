document.title = "Servicios de los alumnos";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import AlumnoContext from "../../context/Alumnos/alumnoContext";
import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
import TableAlumno from "./common/TableAlumno/table-alumno";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import TableServicios from "../Servicios/common/TableServicios/table-servicios";

const ServiciosAlumno = () => {
	const {
		getAlumnos,
		totalAlumnos,
		setPagination,
		pagination,
	} = useContext(AlumnoContext);
	const [selectedIndex, setselectedIndex] = useState(3);
	const [page, setPage] = useState(pagination.page);
	const [limit, setLimit] = useState(9);
	useEffect(() => {
		getAlumnos(pagination.page, pagination.limit);
	}, []);
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar />
				<div className=" flex flex-row h-full">
					<SideBarState>
						<Sidebar selectedIndex={selectedIndex} />
					</SideBarState>
					<div className="mt-2  flex flex-col items-center w-full px-10">
						<Card
							head={
								<>
									<h5 className="text-gray-700 text-2xl leading-tight mb-2">
										Servicios
									</h5>
									<div className="flex flex-row gap-5	">
										<p className="text-xl">Mostrar: </p>
										<DropDown
											paginationContext={{
												setPagination,
												pagination,
											}}
											pagination={pagination}
										/>
										</div>
										<div className="flex flex-row w-full my-8">
											<label class="relative inline-flex items-center cursor-pointer">
												<input
													defaultChecked={true}
													id="checkbox"
													onChange={(e) => {}}
													type="checkbox"
													value=""
													class="sr-only peer"
												/>

												<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
												<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
													Vencidos
												</span>
											</label>
										
									</div>
								</>
							}
							body={
								<>
									<TableServicios />
								</>
							}
						/>
						<Pagination
							paginationContext={{ setPagination, pagination }}
							page={page}
							count={totalAlumnos / pagination.limit}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
	/* const { getAlumnos, alumnos, totalAlumnos, pagination } = useContext( AlumnoContext );
	useEffect(() => {
		getAlumnos();
	}, []);
	const [selectedIndex, setselectedIndex] = useState(3);
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
								<Table servicios={ alumnos } />
							</>
						}
					/>
					<Pagination  page={page} count={ (totalServicios / pagination.limit ) }/>
				</div>
			
			</div>
		
			<Footer/>
		</div>
	); */
};
export default ServiciosAlumno;
