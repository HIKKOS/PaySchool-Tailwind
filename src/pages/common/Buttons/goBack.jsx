import React from "react";
import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";  
const GoBack = ({ handdleClick, linkto }) => {
	return (
		<Link to={linkto} >
            <button
                type="button"
                class="w-full flex flex-row text-black rounded-full  text-sm px-5 py-2.5 mr-2 mb-2 "
                      onClick={handdleClick}
                  >
                 <ArrowLeftIcon className="h-5 w-5"/>
            </button>
        </Link>
	);
};
export default GoBack;
