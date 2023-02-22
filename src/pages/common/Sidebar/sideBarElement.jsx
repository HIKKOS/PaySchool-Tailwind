import React from "react";
import { Link } from "react-router-dom";
const SideBarElement = ({ linkto, text, icon, selected }) => {
	const style =
		"w-full my-2 flex flex-row justify-evenly hover:text-blue-500 hover:bg-white transition-colors rounded-md";
	return (
		<Link to={linkto}>
			<div className= {`${style} ${
						selected
							? "text-blue-500 bg-white rounded-md"
							: "text-white"
					}`}>
				<li
					className="items-center  flex flex-row w-1/2"
				>
					{icon}
					<p className=" p-2 text-s">{text}</p>
				</li>
			</div>
		</Link>
	);
};
export default SideBarElement;
