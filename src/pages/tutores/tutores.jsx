document.title = "Alumnos";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SideBarState } from "../../context/sideBar/sideBarContext";
import TutoresContext from "../../context/Tutores/tutoresContext";
import AddButton from "../common/Buttons/addElement";
import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import TopNavBar from "../common/topBar";
import Pagination from "../common/Pagination/Pagination";
import DropDown from "../common/dropdown/dropDown";
import TableTutores from "./common/TableTutores/table-tutores";

const Tutores = () => {
	document.title = "Tutores";
	const { getTutores, tutores, totalTutores, setPagination, pagination } =
		useContext(TutoresContext);
	const [selectedIndex, setselectedIndex] = useState(2);
	const [page, setPage] = useState(pagination.page);

	useEffect(() => {
		getTutores(pagination.page, pagination.limit);
	}, []);
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900  h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar />
				<div className="flex flex-row h-full">
					<SideBarState>
						<Sidebar selectedIndex={selectedIndex} />
					</SideBarState>
					<div className="mt-2  flex flex-col items-center w-full px-10">
						<Card
							head={
								<div className="flex flex-row w-full justify-between">
									<div className="flex flex-col w-1/2">
										<h5 className="text-gray-700 text-2xl leading-tight mb-2">
											Tutores
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
											text={"Agregar tutor"}
											handleClick={(e) => {}}
											linkto={"/alumnos/agregar"}
										/>
									</div>
								</div>
							}
							body={
								<>
									<TableTutores data={tutores} />
								</>
							}
						/>
						<Pagination
							paginationContext={{ setPagination, pagination }}
							page={page}
							count={totalTutores / pagination.limit}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
	/* const { getTutores, Tutores, totalTutores, pagination } = useContext( AlumnoContext );
	useEffect(() => {
		getTutores();
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
								<Table servicios={ Tutores } />
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
export default Tutores;
