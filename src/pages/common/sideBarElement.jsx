import React from "react";
const SideBarElement = ({ text, icon, selected }) => {
	const style = 'items-center w-full flex flex-row start hover:text-blue-500 hover:bg-white transition-colors  m-1 justify-center rounded-md'
	return (

		<li className={`${style} ${selected ? 'text-blue-500 bg-white rounded-md' :'text-white'}`}>
			{icon}<p className='p-2 text-center'>{text}</p>
		</li>
	);
};
export default SideBarElement;
