import React from "react";
import Table from "./Table/Table";
import AddElementBtn from "./Buttons/addElement";
import Carrousel from "./carrousel";
const Card = () => {
	return (
		<div className=" flex flex-row justify-center">
			<div className=" backdrop-blur-sm block p-6 rounded-3xl shadow-lg bg-white/90 w-full mx-10 ">
				<div className="flex flex-row justify-between">
					<h5 className="text-gray-700 text-2xl leading-tight mb-2">
						Servicios
					</h5>
					<AddElementBtn text="Agregar servicio" />
				</div>

				<hr className="my-3" />
				<Table />
		{/* 		<Carrousel imgPathsId={[1, 6, 7, 9]} /> */}
			</div>
		</div>
	);
};
export default Card;
