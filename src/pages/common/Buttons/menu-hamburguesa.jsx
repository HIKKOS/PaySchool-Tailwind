import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const HamburgerBtn = ({ handdleClick }) => {
	return (
		<button onClick={handdleClick} typeof='button' className='flex flex-row justify-center'>
			<Bars3Icon className="text-white w-10 h-10" />
		</button>
	);
};
export default HamburgerBtn;
