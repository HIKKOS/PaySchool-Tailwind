import React from "react";
import AddElementBtn from "./Buttons/addElement";
import GoBack from "./Buttons/goBack";


const Card = ({ body, head , editar, goBack }) => {
	return (
		<div className=" flex flex-row justify-center w-full mx-10	">
			<div className=" backdrop-blur-sm block p-6 rounded-md shadow-lg bg-white/90 w-full ">
				
				<div className={`${ editar ? 'justify-start' : 'justify-between'} flex flex-row`}>				
				{ editar ? <GoBack					
						linkto={goBack}
					/>: null}
					<h5 className="text-gray-700 text-2xl leading-tight mb-2">
					{head}
					</h5>

					{ !editar ? <AddElementBtn
						linkto={"/servicios/agregar	"}
						text="Agregar servicio"
					/>: null}
				</div>
				<hr className="my-3" />
				{body}		
			</div>
		</div>
	);
};
export default Card;
