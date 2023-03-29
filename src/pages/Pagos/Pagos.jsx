import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import TablePagos from "../Pagos/TablePagos";
import { baseURL } from "../../config";
import DropDown from "../common/DropdownSearch/dropDown";
import axios from "axios";
import Pagination from "../common/paginationv2/Pagination";
import Layout from "../common/Layout";
const getPagos = async ({ page = 1, limit = 5 }) => {
	const response = await axios.get(
		`${baseURL}/pagos/web?page=${page}&limit=${limit}`,
		{
			headers: {
				"x-token": localStorage.getItem("jwt"),
			},
		}
	);
	return { pagos: response.data.pagos, total: response.data.total };
};
const Pagos = () => {
	document.title = "Pagos";
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
	}, [page, limit]);
	return (
		<Layout>
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
					body={<TablePagos pagos={pagos} />}
				/>
				<Pagination
					length={Math.ceil(totalPagos / limit)}
					page={page}
					setPage={setPage}
				/>
			</div>
		</Layout>
	);
};
export default Pagos;
