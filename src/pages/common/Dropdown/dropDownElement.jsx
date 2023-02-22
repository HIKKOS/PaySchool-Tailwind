import React, { useContext } from "react";
import ServicioContext from "../../../context/Servicio/ServicioContext";
const DropDownElement = ({ text }) => {
    const { setPagination, pagination } = useContext(ServicioContext);
	return (
		<li >
			<button
            onClick={e => setPagination({ page: pagination.page, limit: Number(text) })}
				href=""
				class="w-full hover:bg-blue-500 hover:text-white block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
			>
				{text}
			</button>
		</li>
	);
};
export default DropDownElement;
