import React, { useMemo,useState } from "react";
import Dropdown from "../common/DropdownSearch/dropDown";
import { IconX } from '@tabler/icons-react'
import DeleteBtn from "../common/Buttons/delete";
const arr = [];
const TableSearchServiciosAlumno = ({ data = [], handdleIds }) => {
    const [fechas, setFechas] = useState([]);
    const [show, setShow] = useState([]);
	const TheadItems = [ 
        "Seleccionar"    ,   
		"Nombre",
		"Descripción",
		"Contratar hasta",
        
	];
    useMemo(() => {
        arr
    }, [arr])
	const row = data.map((element) => {
		return (
			<tr key={element.Id} className="m-2 text-lg text-gray-800">
				 <td className="pl-10">
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
                            const picked = data.map(d => false)
                            setShow(picked)
                            setShow()
							handdleIds(arr);                        
							console.log(arr);                            
						}}
						className="pickCheckbox"
						id={element.Id}
						type="checkbox"
					/>

				</td> 
				<td>
					<p className="text-start">{element.Nombre}</p>
				</td>
				<td>
					<p className="text-start">{element.Descripcion}</p>
				</td>
				<td className="flex flex-row items-center w-1/2 gap-2">      
                    <input onChange={
                        (e) => {                        
                            document.querySelectorAll('.pickCheckbox').forEach(( element, index) => {
                                if(fechas.map( f => {
                                    return f.Id
                                })){
                                    element.checked = true;
                                    return
                                }
                            })
                            setFechas([
                                ...fechas, 
                                {
                                    Id: element.Id,
                                    fecha: e.target.value
              
                                }                               
                            ]
                            )
                          
                        }
                    } type="date" id={element.Id} />
                   
				</td>
              
			</tr>
		);
	});
	return (
		<table className="w-full">
			<thead className="mb-10">
				<tr>
					{TheadItems.map((item, index) => {
						return (
							<th className="m-10 text-lg text-gray-800">
								<p className="text-left">{item}</p>
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody> {row} </tbody>
		</table>
	);
};
export default TableSearchServiciosAlumno;
