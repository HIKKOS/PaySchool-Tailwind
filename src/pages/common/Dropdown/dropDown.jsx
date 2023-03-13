import React from "react";
import DropDownElement from "./dropDownElement";

const DropDown = ({ pagination, paginationContext }) => {
	return (	
			<select						
				class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-white"	
			>
				{pagination.limit}			
					<DropDownElement defaultChecked={true} paginationContext={paginationContext} text={5}/>
					<DropDownElement paginationContext={paginationContext} text={1}/>
					<DropDownElement paginationContext={paginationContext} text={3}/>
					<DropDownElement paginationContext={paginationContext} text={10}/>								
			</select>
			
		
	);
};
export default DropDown;
