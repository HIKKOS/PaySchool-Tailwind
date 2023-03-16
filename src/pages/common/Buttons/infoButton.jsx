import React from "react";
import { Link } from "react-router-dom"; 'react-router-dom'
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { PRIVATE } from "../../../config/router/paths";
const InfoButton = ({ linkto, text, handleClick }) => {
	return (
		<Link to={PRIVATE + linkto} >
            <button
                type="button"
                class=" w-full flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handleClick}
                  >
                <InformationCircleIcon className="h-5 w-5" /> {text}
            </button>
        </Link>
	);
};
export default InfoButton;
