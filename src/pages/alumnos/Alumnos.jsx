document.title = "Alumnos";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import AlumnoContext from "../../context/Alumnos/alumnoContext";
import AddButton from "../common/Buttons/addElement";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
import TableAlumno from "./common/TableAlumno/table-alumno";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import Footer from "../common/Footer/Footer";

const Alumnos = () => {
	document.title = "Alumnos";
	const {
		getAlumnos,
		alumnos,
		totalAlumnos,
		setPagination,
		setAlumno,
		pagination,
	} = useContext(AlumnoContext);
	const [selectedIndex, setselectedIndex] = useState(3);
	const [page, setPage] = useState(pagination.page);
	const [limit, setLimit] = useState(9);
	useEffect(() => {
		getAlumnos(pagination.page, pagination.limit);
	}, []);
	return (
		<div className="container max-w-full w-full ">
			<div className="bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<TopNavBar />
				<div>
					<div className=" flex flex-row h-full">
						<SideBarState>
							<Sidebar selectedIndex={selectedIndex} />
						</SideBarState>
						<div className="h-fit w-full ">
							<div className="px-5 pt-2 flex flex-col items-center ">
								<Card
									showAddBtn={true}
									buttonHanddler={{
										text: "Agregar Alumno",
										linkto: "/Alumnos/Agregar",
									}}
									head={
										<div className="flex flex-row w-full justify-between">
											<div className="flex flex-col w-1/2">
												<h5 className="text-gray-700 text-2xl leading-tight mb-2">
													Alumnos
												</h5>
												<div className="flex flex-row gap-5	">
													<p className="text-xl">
												
														Mostrar:
													</p>
													<DropDown
														paginationContext={{
															setPagination,
															pagination,
														}}
														pagination={pagination}
													/>
												</div>
											</div>
											<div className="flex flex-col justify-center">
												<AddButton
													text={"Agregar alumno"}
													handleClick={(e) => {}}
													linkto={"/alumnos/agregar"}
												/>
											</div>
										</div>
									}
									body={
										<>
											<TableAlumno
												tipoTabla={0}
												setAlumno={setAlumno}
												data={alumnos}
											/>
										</>
									}
								/>
								<Pagination
									paginationContext={{
										setPagination,
										pagination,
									}}
									page={page}
									count={totalAlumnos / pagination.limit}
								/>
							</div>
						</div>
					</div>
					 <Footer/>
				</div>
			</div>
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
export default Alumnos;
