import React, { useState } from "react";
import PaginationItem from "./PagItem";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Pagination = ({ count, paginationContext }) => {
	const { setPagination, pagination } = paginationContext;
	const [index, setIndex] = useState(0)
	const items = [];
	for (let i = 0; i < count; i++) {		
		items.push(<PaginationItem paginationContext={paginationContext} handdleClick={e => setPagination({page: Number(i + 1), limit: pagination.limit }) } key={i} text={ i + 1 }/>)
	} 
	return (
		<div className="p-4 flex items-center flex-wrap">
			<nav aria-label="Page navigation">
				<ul className="inline-flex">
					<li key={'prev'}>
						<button onClick={e => 
						pagination.page === 1 
						? setPagination({page: 1, limit: pagination.limit })  
						: setPagination({page: pagination.page - 1, limit: pagination.limit })  
						} className= {`${pagination.page === 1 ? 'bg-white/20 text-white  border' : 'bg-white text-blue-600 hover:bg-blue-100 border' } px-4 py-2  transition-colors duration-150  rounded-l-lg focus:shadow-outline `}>
							<ChevronLeftIcon className="h-6 w-6"/>
						</button>
					</li>					
					{items}					
					<li key={'next'}> 
						<button
						onClick={e => 
							pagination.page === count 
							? setPagination({page: count, limit: pagination.limit })  
							: setPagination({page: pagination.page + 1, limit: pagination.limit })  
							}
						className= {`${pagination.page === count? 'bg-white/20 text-white  border' : 'bg-white text-blue-600 hover:bg-blue-100 border' } px-4 py-2  transition-colors duration-150  rounded-r-lg focus:shadow-outline `}>
							<ChevronRightIcon className="h-6 w-6"/>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Pagination;
