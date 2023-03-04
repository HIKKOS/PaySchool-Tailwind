import React from "react";
const CustomTable = ({  data = [] }) => {
	//data =[{}{}{}{}]
	const TheadItems = Object.keys(data[0]).map( t => <th className="m-10 text-lg text-gray-800"> {t} </th>) 
	console.log(data);
	const row = data.map((element) => {
		let values = Object.values(element);
		values = values.map((t) => <th className="px-10">{t}</th>)
		return <tr className="m-10 text-lg text-gray-800"> {values} </tr>
	});
	return (
		<table className="w-full">
			<thead className="mb-10">
				<tr className="text-gray-700  p-10">{TheadItems}</tr>
			</thead>
			<tbody> {row} </tbody>
		</table>
	);
};
export default CustomTable;
