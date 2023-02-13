import React from "react";
import {Link} from 'react-router-dom'
const SideBarElement = ({linkto, text, icon, selected }) => {
	const style = 'items-center w-full flex flex-row start hover:text-blue-500 hover:bg-white transition-colors  m-1 justify-center rounded-md'
	return (

		<Link to={linkto}>
			<li className={`${style} ${selected ? 'text-blue-500 bg-white rounded-md' :'text-white'}`}>
				{icon}<p className='p-2 text-center'>{text}</p>
			</li>
		</Link>
	);
};
export default SideBarElement;
