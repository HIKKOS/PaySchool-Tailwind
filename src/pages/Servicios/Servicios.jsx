import React, { useEffect, useContext, useState } from "react";
import Select from "react-select";
import ServicioContext from "../../context/Servicio/ServicioContext";
import Card from "../common/Card";
import AddButton from "../common/Buttons/addElement";
import Pagination from "../common/PaginationV2/Pagination";
import DropDown from "../common/DropdownSearch/dropDown";
import TableServicios from "./common/TableServicios/table-servicios";
import { baseURL } from "../../config";
import Layout from "../common/Layout";

const Servicios = () => {
	document.title = "Servicios";
	const {
		getServicios,
		servicios,
		setServicio,
		totalServicios,
		pagination,
		setPagination,
	} = useContext(ServicioContext);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);

	const [serviciosBusqueda, setServicioBusqueda] = useState([]);
	const searchBarElements = [
		"Servicio",
		`${baseURL}/buscar/Servicios`,
		`&dataFor=web&page=${pagination.page}&limit=${pagination.limit}`,
		setServicioBusqueda,
	];
	useEffect(() => {
		getServicios(page, limit);
	}, [page, limit]);
	return (
		<Layout>
			<div className="mt-2 flex flex-col items-center h-full w-full px-10">
				<Card
					head={
						<div className="flex flex-row w-full justify-between">
							<div className="flex flex-col w-1/2">
								<h5 className="text-gray-700 text-2xl leading-tight mb-2">
									Servicios
								</h5>
								<div className="flex flex-row gap-5	">
									<p className="text-xl">Mostrar:</p>

									<DropDown
										items={[1, 2, 3, 5]}
										handdleMouseUp={setLimit}
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
									text={"Agregar servicio"}
									handleClick={(e) => {}}
									linkto={"/servicios/agregar"}
								/>
							</div>
						</div>
					}
					body={
						<>
							{serviciosBusqueda.length > 0 ? (
								<TableServicios
									tipoTabla={0}
									setServicio={setServicio}
									servicios={serviciosBusqueda}
								/>
							) : (
								<TableServicios
									tipoTabla={0}
									setServicio={setServicio}
									servicios={servicios}
								/>
							)}
						</>
					}
				/>
				<div className="my-3">
					<Pagination page={page} setPage={setPage} length={Math.ceil(totalServicios/limit)}/>
					
				</div>
			</div>
		</Layout>
	);

	/* 	return (
		<div className="container max-w-full w-full ">
			<div className="flex flex-col w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<div className="h-full flex flex-col w-full">
					<TopNavBar
						showSearchBar={true}
						shearchBarElements={searchBarElements}
					/>
					<div className=" flex flex-row h-full">
						<Sidebar selectedIndex={1} />
						<div className="mt-2 flex flex-col items-center h-full w-full px-10">
							<Card
								head={
									<div className="flex flex-row w-full justify-between">
										<div className="flex flex-col w-1/2">
											<h5 className="text-gray-700 text-2xl leading-tight mb-2">
												Servicios
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
												text={"Agregar servicio"}
												handleClick={(e) => {}}
												linkto={"/servicios/agregar"}
											/>
										</div>
									</div>
								}
								body={
									<>
										{serviciosBusqueda.length > 0 ? (
											<TableServicios
												tipoTabla={0}
												setServicio={setServicio}
												servicios={serviciosBusqueda}
											/>
										) : (
											<TableServicios
												tipoTabla={0}
												setServicio={setServicio}
												servicios={servicios}
											/>
										)}
									</>
								}
							/>
							<Pagination
								paginationContext={{
									setPagination,
									pagination,
								}}
								page={page}
								count={totalServicios / pagination.limit}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	); */
};
export default Servicios;
