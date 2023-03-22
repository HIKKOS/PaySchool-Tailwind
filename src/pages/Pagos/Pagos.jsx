document.title = "Pagos";
import React, { useEffect, useContext, useState } from "react";
import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { baseURL } from "../../config";
import TopNavBar from "../common/topBar";
import DropDown from "../common/DropdownSearch/dropDown";
import axios from "axios";
import CustomTable from "../common/CustomTable/CustomTable";
import Pagination from "../common/paginationv2/Pagination";
const getPagos = async ({ page = 1, limit = 5 }) => {
	const response = await axios.get(
		`${baseURL}/pagos/web?page=${page}&limit=${limit}`,
		{
			headers: {
				"x-token": localStorage.getItem("jwt"),
			},
		}
	);
	return {pagos: response.data.pagos, total: response.data.total};
};
const Pagos = () => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);
	const [pagos, setPagos] = useState([]);
	const [totalPagos, setTotalPagos] = useState(1);
	const searchBarElements = [
		"Tutor",
		`${baseURL}/buscar/Pagos`,
		`&page=${page}&limit=${limit}`,
		setPagos,
		setTotalPagos,
	];
	const refeshData = () => {
		getPagos({ page, limit }).then((res) => {
			setPagos(res.pagos);
		});
	};
	useEffect(() => {
		getPagos({ page, limit }).then((res) => {
			setPagos(res.pagos);
			setTotalPagos(res.total);			
		});	
	}, [page, limit, totalPagos]);
	return (
		<div className="container max-w-full w-full ">
			<div className="flex flex-col w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<div className="h-full flex flex-col w-full">
					<TopNavBar
						showSearchBar={true}
						shearchBarElements={searchBarElements}
					/>
					<div className=" flex flex-row h-full">
						<Sidebar selectedIndex={4} />
						<div className="my-4 flex flex-col items-center h-full w-full px-10">
							<Card
								head={
									<div className="flex flex-row w-full justify-between">
										<div className="flex flex-col w-1/2">
											<h5 className="text-gray-700 text-2xl leading-tight mb-2">
												Pagos
											</h5>
											<div className="flex flex-row gap-5	">
												<p className="text-xl">Mostrar:</p>
												<DropDown																		
													handdleMouseUp={setLimit}												
													sortOptions={true}
													items={[1, 3, 10]}
													defaultValue={5}
												/>
											</div>
										</div>
									</div>
								}
								body={
									<CustomTable
										showCheckBoxex={false}
										data={pagos}
									/>
								}
							/>
							<Pagination length={Math.ceil(totalPagos / limit)}  page={page} setPage={setPage}/>
							
						</div>
					</div>
				</div>			
				<Footer />
			</div>
		</div>
	);
};
export default Pagos;
