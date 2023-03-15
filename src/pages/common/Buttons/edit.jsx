import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {Link} from 'react-router-dom'
import { PRIVATE } from "../../../config/router/paths";
const EditBtn = ( { linkto ,handdleClick, text = 'editar' } ) => {
	return (

		<Link to={`${PRIVATE}${linkto}`} >
			<button
				onClick={handdleClick}
				type="button"
				class="w-full flex flex-row focus:outline-none text-white bg-yellow-400 hover:bg-yellow-5	00 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"			
			>
				<PencilSquareIcon className="h-5 w-5" /> {text}
			</button>
		</Link>
	);
};
export default EditBtn;
