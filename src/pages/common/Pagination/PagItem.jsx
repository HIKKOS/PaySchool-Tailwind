import React,{ useContext } from "react";
const PaginationItem = ({  text, handdleClick, paginationContext,  }) => {
	const { pagination } = paginationContext

	return (
		<li>
			<li>
				<button onClick={handdleClick} className= {`${pagination.page === Number(text) ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-500 hover:text-white px-4 py-2 text-blue-600 transition-colors duration-150 border border-r-0  focus:shadow-outline`}>
					{text}
				</button>
			</li>
		</li>
	);
};
export default PaginationItem;
