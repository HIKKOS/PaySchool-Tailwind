document.title = "Alumnos";
import React, { useEffect, useState, useContext, useMemo } from "react";
import AlumnoContext from "../../context/Alumnos/alumnoContext";
import AddButton from "../common/Buttons/addElement";
import Card from "../common/Card";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
import TableAlumno from "./common/TableAlumno/table-alumno";
import Layout from "../common/Layout";
import SearchBar from "../common/searchBar";

const Alumnos = () => {
	document.title = "Alumnos";
	const {
		getAlumnos,
		totalAlumnos,
		setPagination,
		setAlumno,
		pagination,
	} = useContext(AlumnoContext);
	const [alumnos, setAlumnos] = useState([]);
	const memoAlumnos = useMemo(() => {
		if (alumnos.length === 0) {
			getAlumnos().then((res) => {
				setAlumnos(res);
			});
		}
		return alumnos;
	}, [alumnos]);
	const [selectedIndex, setselectedIndex] = useState(3);
	const [page, setPage] = useState(pagination.page);
	const [limit, setLimit] = useState(9);
	useEffect(() => {
		getAlumnos(pagination.page, pagination.limit);
	}, []);
	return (
		<Layout>
			<div className="h-fit w-full ">
				<div className="px-5 pt-2 flex flex-col items-center  ">
					<Card
						showAddBtn={true}
						buttonHanddler={{
							text: "Agregar Alumno",
							linkto: "/Alumnos/Agregar",
						}}
						head={
							<div className="flex flex-row gap-2 w-full justify-between items-center">
								<div className="flex flex-col w-1/2">
									<h5 className="text-gray-700 text-2xl leading-tight mb-2">
										Alumnos
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
								<div className="flex flex-col w-1/3">
									<SearchBar
										setTotal={() => {}}
										endPoint={"alumnos"}
										entity={"Alumno"}
										responseHanddler={() => {}}
									/>
								</div>
								<div className=" flex flex-col justify-center">
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
		</Layout>
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
