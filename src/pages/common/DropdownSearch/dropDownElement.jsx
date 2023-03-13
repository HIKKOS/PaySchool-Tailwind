import React  from "react";
const DropDownElement = ({ handdleMouseUp, text, value, defaultChecked }) => {
	return ( 
			<option
				value={value}
				defaultChecked={defaultChecked}
				onMouseUp={ e => handdleMouseUp(e.target.value) }
				className="w-full text-center hover:bg-blue-500 hover:text-white block py-2 "
			>
				{value}
			</option>
		
	);
};
export default DropDownElement;
