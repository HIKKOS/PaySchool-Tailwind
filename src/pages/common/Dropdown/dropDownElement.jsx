import React  from "react";
const DropDownElement = ({ paginationContext, text, defaultChecked }) => {
    const { setPagination, pagination } = paginationContext
	return ( 
			<option
				value={text}
			 defaultChecked={defaultChecked}
             onMouseUp={e => setPagination({ page: pagination.page, limit: Number(text) })}
				href=""
				className="w-full hover:bg-blue-500 hover:text-white block py-2 "
			>
				{text}
			</option>
		
	);
};
export default DropDownElement;
