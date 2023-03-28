import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const PagItem = ({ text, handdleClick, isSelected= false }) => {
	return (
		<button
			onClick={(e) => handdleClick(Number(text))}
			className={`${isSelected ? 'bg-blue-500 text-white' : 'bg-white'} h-full hover:bg-blue-500 hover:text-white px-4 py-2 text-blue-600 transition-colors duration-150 border border-r-0  focus:shadow-outline`}
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
				handdleClick={(e) => {setPage(number); localStorage.setItem('page',page)}}
			/>
		);
	}
	items.unshift(
		<button
			onClick={(e) => setPage(page > 1 ? (page - 1) : 1)}
			className={`${page === 1 ? 'bg-white/20 text-white  border' : 'bg-white text-blue-600 hover:bg-blue-100 border' } px-4 py-2  transition-colors duration-150  rounded-l-lg focus:shadow-outline `}
			type="button"
			key={'prev'}
		>
			<IconChevronLeft size={30} />
		</button>
	);
	items.push(
		<button
			key={'next'}
			onClick={(e) => setPage(page < length  ? (page + 1) : length)}
			className={`${page === length ? 'bg-white/20 text-white  border' : 'bg-white text-blue-600 hover:bg-blue-100 border' } h-full px-4 py-2  transition-colors duration-150  rounded-r-lg focus:shadow-outline `}
			type="button"
		>
			<IconChevronRight size={30} />
		</button>
	);
	return (
		<ul className="inline-flex ">
			{items.map((item) => {
				return <li>{item}</li>;
			})
			}
		</ul>
	);
};
export default Pagination;
