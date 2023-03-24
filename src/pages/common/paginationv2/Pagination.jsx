import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const PagItem = ({ text, handdleClick,isSelected= false }) => {
	return (
		<button
			onClick={(e) => handdleClick(Number(text))}
			className=  {`${isSelected ? 'bg-blue-500 text-white' : 'bg-white'} bg-blue-500  hover:bg-blue-500 hover:text-white px-4 py-2 text-blue-600 transition-colors duration-150 border border-r-0  focus:shadow-outline`}
			type="button"
		>
			{text}
		</button>
	);
};
const Pagination = ({ setPage, page, length }) => {
	const items = [];
	for (let number = 1; number <= (length); number++) {
		items.push(
			<PagItem
			 isSelected={page === number}
				key={number}
				text={number}
				handdleClick={(e) => setPage(number)}
			/>
		);
	}
	items.unshift(
		<button
			onClick={(e) => setPage(page > 1 ? (page - 1) : 1)}
			className="bg-blue-500 text-white  hover:bg-blue-500 hover:text-white-500 px-4 py-2  transition-colors duration-150 border border-r-0  focus:shadow-outline"
			type="button"
		>
			<IconChevronLeft  />
		</button>
	);
	items.push(
		<button
			onClick={(e) => setPage(page < length  ? (page + 1) : length)}
			className="bg-blue-500 text-white hover:bg-blue-500 hover:text-white px-4 py-2 transition-colors duration-150 border border-r-0  focus:shadow-outline"
			type="button"
		>
			<IconChevronRight />
		</button>
	);
	return (
		<ul className="flex flex-row justify-center items-center">
			{items.map((item) => {
				return <li>{item}</li>;
			})
			}
		</ul>
	);
};
export default Pagination;
