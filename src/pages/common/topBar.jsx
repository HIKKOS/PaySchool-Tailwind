import React from "react";
import SearchBar from "./searchBar";
import { Dropdown } from "flowbite";
import NavBar from "./NavBar";

const TopNavBar = ({ showSearchBar = true, shearchBarElements = [] }) => {
	const [entity, endPoint, query, responseHanddler, setTotalPagos] =
		shearchBarElements;
		return (
		<div
			className={
				"topbar flex flex-row justify-between items-center bg-blue-500"
			}
		>
			<div className="justify-start w-1/4">
				<p className="pl-10 text-lg text-start font-bold text-white">
					PaySchool
				</p>
				
			</div>
			<div className="justify-end w-3/4">
				{showSearchBar ? (
					<SearchBar
						setTotalPagos={setTotalPagos}
						endPoint={endPoint}
						entity={entity}
						responseHanddler={responseHanddler}
						query={query}
					/>
				) : (
					<div className="h-[8vh]" />
				)}
			</div>
		</div>
	); 
};
export default TopNavBar;
