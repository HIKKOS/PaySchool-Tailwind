import React from "react";
import DropDownElement from "./dropDownElement";

const DropDown = ({className = '', sortOptions = false, onChange,  handdleMouseUp, value, items = [], defaultValue='Seleccionar' }) => {
	const options = items.map((item, i) => {
		return <DropDownElement onChange={onChange} handdleMouseUp={ handdleMouseUp } defaultChecked={false}  value={item} text={item}/>;
	})
	options.unshift(<DropDownElement onChange={onChange} handdleMouseUp={ handdleMouseUp } defaultChecked={true} value={defaultValue} text={defaultValue}/>)
	return (	
			<select						
				className={`${className} text-white bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-none`}	
				defaultValue={value}
			>			
			{sortOptions ? options.sort((a,b) => a - b) : options}					
											
			</select>
			
		
	);
};
export default DropDown;
