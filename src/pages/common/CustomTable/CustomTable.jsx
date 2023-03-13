import React from "react";
const arr = []
const CustomTable = ({  data = [], handdleIds, showCheckBoxex = true}) => {
	if(data.length === 0){
		return
	}
	
	const TheadItems = Object.keys(data[0]).map( ( t, i ) => {if(i !== 0) {return <th className="m-10 text-lg text-gray-800"> {t} </th>}}) 
	showCheckBoxex ? TheadItems.unshift(<th className="m-10 text-lg text-gray-800">Seleccionar</th>): null
	
	const row = data.map((element) => {
		let values = Object.values(element);
		values = values.map((t, i) => {if(i !== 0){return <th className="px-10"><p className="font-thin">{t === true ? 'Sí' : t === false ? 'No' : t}</p></th>}})
		showCheckBoxex ? values.unshift(<td className="h-full flex flex-row justify-center">
		<input
			onChange={(e) => {
				if (e.target.checked) {
					arr.push(element.Id);
				} else {
					const index = arr.indexOf(element.Id);
					if (index > -1) {
						arr.splice(index, 1);
					}
				}
				handdleIds(arr);
				console.log(arr);
			}}
			className="alumnoCheckbox"
			id={element.Id}
			type="checkbox"
		/>
	</td>) : null
		return <tr className="m-10 text-lg text-gray-800"> {values} </tr>
	});
	return (
		<table className="w-full">
			<thead className="mb-10">
				<tr className="text-gray-700 p-10">{TheadItems}</tr>
			</thead>
			<tbody> {row} </tbody>
		</table>
	);
};
export default CustomTable;
