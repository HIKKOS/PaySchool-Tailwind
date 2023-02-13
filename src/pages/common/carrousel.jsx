import React, { useEffect, useState,useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const Carrousel = ({ servicioId,slides }) => {
	slides = slides.map( s => `http://localhost:8080/api/uploads/${servicioId}/${s}`)
	console.log(slides);
	const [curr, setCurr] = useState(0);
	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length-1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length-1 ? 0 : curr + 1));
	return (
		<div className='flex justify-center  max-w-full h-[500px] w-full m-auto px-4 relative group'>			
				<div className="w-2/3 h-full	  rounded-3xl bg-cover duration-500" style={{backgroundImage: `url("${slides[curr]}")`}}>			
				<button className="cursor-pointer hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl left-5 rounded full" type="button" onClick={prev}>
					<ChevronLeftIcon className="h-10 w-10"/>
				</button>
				<button className="cursor-pointer hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl right-5 rounded full" type="button" onClick={next}>
					<ChevronRightIcon className="h-10 w-10"/>
				</button>
				
			</div>
		</div>
	);
};
export default Carrousel;
