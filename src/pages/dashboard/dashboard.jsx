import React from "react";
import TopNavBar from "../common/topBar";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { getMonthAmout } from "./utils";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},

		title: {
			display: true,
			text: "Servicios más contratados este mes",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Servicios",
			data: labels.map(() => Math.floor(Math.random() * 10)),
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

const Dashboard = () => {
	return (
		<div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-full">
			<div className="h-full flex flex-col w-full">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row h-full">
					<Sidebar selectedIndex={0} />
					<div className="flex flex-col">
						<div className="flex flex-row h-full">
							<div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
								<Card
									head={"Ingresos Mensuales"}
									editar={false}
									title={"card"}
									body={<div> {getMonthAmout().then(res => res)} </div>}
								/>
							</div>
							<div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
								<Card
									head={"Servicio menos contratado"}
									editar={false}
									title={"card"}
									body={<div> ola </div>}
								/>
							</div>
							<div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
								<Card
									head={"Ingresos semanalas"}
									editar={false}
									title={"card"}
									body={<div> ola </div>}
								/>
							</div>
						</div>
						<div className="mt-2 flex flex-row items-center  px-10">
							<Card
								head={"Servicios contratados"}
								editar={false}
								title={"card"}
								body={<Bar options={options} data={data} />}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
