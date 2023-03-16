import React from "react";
import DropDownElement from "./dropDownElement";

const DropDown = ({ pagination, paginationContext }) => {
	return (	
			<select						
				class=" text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  border-white"	
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
