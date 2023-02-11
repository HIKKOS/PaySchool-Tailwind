import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
const DeleteBtn = () => {
	return (
		<button
			type="button"
			class=" flex flex-row  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
		>
			<TrashIcon className="h-5 w-5" /> Eliminar
		</button>
	);
};
export default DeleteBtn;
