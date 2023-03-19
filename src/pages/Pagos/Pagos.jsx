document.title = "Pagos";
import React, { useEffect, useContext, useState } from "react";
import AddElementBtn from "../common/Buttons/addElement";
import Footer from "../common/Footer/Footer";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";

import TopNavBar from "../common/topBar";
import DropDown from "../common/dropdown/dropDown";


const Pagos = () => {
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-[140vh]">
			<div className="h-full flex flex-col w-full">
				<TopNavBar />
				<div className=" flex flex-row h-full">
						<Sidebar selectedIndex={4} />
					<div className="mt-2 flex flex-col items-center h-full w-full px-10">
						<Card
							head={
								<div className="flex flex-row w-full justify-between">
									<div className="flex flex-col w-1/2">
										<h5 className="text-gray-700 text-2xl leading-tight mb-2">
											Pagos
										</h5>
										<div className="flex flex-row gap-5	">
											<p className="text-xl"> Mostrar: </p>											
										</div>
									</div>
								
								</div>
							}
						/>
						
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};
export default Pagos
