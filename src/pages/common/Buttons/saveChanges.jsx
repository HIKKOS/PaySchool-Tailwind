import React from "react";
import { Link } from "react-router-dom"; 'react-router-dom'
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
const   SaveChangesBtn = ({ linkto, text, handdleClick }) => {
	return (
		<Link className="flex flex-row w-full" to={linkto} >
            <button
                type="button"
                class=" justify-center w-full flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handdleClick}
                  >
                <ArrowDownOnSquareIcon  className="h-5 w-5" /> <p className="px-3">{`${text}`}</p> 
            </button>
        </Link>
	);
};
export default SaveChangesBtn;
