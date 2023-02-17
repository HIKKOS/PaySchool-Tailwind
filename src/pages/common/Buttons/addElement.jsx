import React from "react";
import { Link } from "react-router-dom"; 'react-router-dom'
import { PlusIcon } from "@heroicons/react/24/solid";
const AddElementBtn = ({ linkto, text, handleClick }) => {
	return (
		<Link to={linkto} >
            <button
                type="button"
                class="w-full flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handleClick}
                  >
                <PlusIcon className="h-5 w-5" /> {text}
            </button>
        </Link>
	);
};
export default AddElementBtn;
