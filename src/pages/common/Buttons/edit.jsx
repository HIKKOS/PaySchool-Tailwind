import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
const EditBtn = ( { servicio } ) => {
	return (
		<button
			type="button"
			class="flex flex-row focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
			onClick={e=> alert(servicio)}
		>
			<PencilSquareIcon className="h-5 w-5" /> Editar
		</button>
	);
};
export default EditBtn;
