document.title = "Servicios contratados";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AddElementBtn from "../common/Buttons/addElement";
import AlumnoContext from "../../context/Alumnos/alumnoContext";
import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import TableServicios from "../alumnos/common/table-servicios";
import axios from "axios";
import { baseURL } from "../../config";
const  getServiciosAlumno = async ( Id ) => {
	const fullUrl = `${baseURL}/alumnos/servicios/${Id}`;
	let jwt;
	if (!localStorage.getItem("jwt")) {
		jwt = "";
	} else {
		jwt = localStorage.getItem("jwt");
	}
	const headers = {
		"x-token": jwt,
	};
	try {
		const res = await axios.get(`${fullUrl}`, { headers });
		const { servicios } = res.data;
		console.log(servicios)
		return servicios;
	} catch (error) {
		console.log(error);
	}
};

const ServiciosAlumno = () => {
	const {
		getAlumnos,
		totalAlumnos,
		setPagination,
		pagination,
		selectedAlumno,
		setAlumno,
	} = useContext(AlumnoContext);
	const selectedIndex = 3;
	const [page, setPage] = useState(pagination.page);
	const [servicios, setServicios] = useState([]);

	useEffect(() => {
		getAlumnos(pagination.page, pagination.limit);
		getServiciosAlumno(selectedAlumno.Id).then( res => {
			setServicios(res)
		})

	}, []);
	
	
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar showSearchBar={false} />
				<div className=" flex flex-row h-full">				
					<Sidebar selectedIndex={selectedIndex} />
					<div className="mt-2  flex flex-col items-center w-full px-10">
						<Card
							goBack={"/Alumnos"}
							editar={true}
							showAddBtn={true}
							buttonHanddler={{
								linkto: "/Alumnos/Servicios/Contratar",
								text: "Agregarle Servicio",
							}}
							head={
								<div className="flex flex-row w-full justify-between">
									<div className="flex flex-col w-1/2">
										<h5 className="text-gray-700 text-2xl leading-tight mb-2">
											Desglose de servicios
										</h5>
										<div className="flex flex-row gap-5	">
											<p className="text-xl">Mostrar:</p>
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
										<AddElementBtn
											linkto={"/Alumnos/Servicios/Contratar"}
											text={"Añadirle servicio"}
										/>
									</div>
								</div>
							}
							body={
								<>
									<TableServicios
										tipoTabla={1}
										servicios={servicios}
									/>
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
