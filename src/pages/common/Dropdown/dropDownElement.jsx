import React  from "react";
const DropDownElement = ({ paginationContext, text }) => {
    const { setPagination, pagination } = paginationContext
	return ( 
			<option
             onMouseUp={e => setPagination({ page: pagination.page, limit: Number(text) })}
				href=""
				class="w-full hover:bg-blue-500 hover:text-white block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
			>
				{text}
			</option>
		
	);
};
export default DropDownElement;
