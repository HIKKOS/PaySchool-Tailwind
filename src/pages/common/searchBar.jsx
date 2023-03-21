import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";
const getData = async (fullUrl, responseHanddler, setTotalPagos) => {
	try {
		const res = await axios.get(fullUrl, {
			headers: {
				"x-token": localStorage.getItem("jwt"),
			},
		});
		if (res.status === 200) {
			const { total, ...data } = res.data;
			const arr = Object.values(data).flat();			
			console.log(total);
			if (arr.length >= 1) {
				responseHanddler(arr);
			} else {
				responseHanddler([]);
			}
			console.error('total de serivcios', total);
			setTotalPagos(total);
		}
	} catch (err) {
		console.log(err);
	}
};
let fullUrl = "";
const SearchBar = ({ setTotalPagos, endPoint, responseHanddler, entity, query}) => {
	const [search, setSearch] = useState("");
	return (
		<div className="w-full">
			<form
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();						
						fullUrl = `${endPoint}?${entity}=${search}${!query ? "" : query}`;
						getData(fullUrl, responseHanddler, setTotalPagos);
					}
				}}
				className="my-2"
			>
				<div className="flex  flex-row items-center">
					<input
						type="text"
						name="query"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						placeholder='Nombre'
						required="required"
						class="mr-4 w-11/12 h-12 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg xl:transition-all xl:duration-300  focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
					/>
					<button
						onClick={(e) => {
							fullUrl = `${endPoint}?${entity}=${search}${query}`;
							getData(fullUrl, responseHanddler,setTotal);
						}}
						className="flex flex-row items-center h-full bg-sky-500 px-5 rounded-lg "
						type="button"
					>
						<div>
							<MagnifyingGlassIcon className="h-12 w-6 text-white" />
						</div>
					</button>
				</div>
			</form>
		</div>
	);
};
export default SearchBar;
