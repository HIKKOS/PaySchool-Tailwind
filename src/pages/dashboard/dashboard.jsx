import React, { useState, useEffect } from "react";
import TopNavBar from "../common/topBar";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import { getMonthAmout, getTotalAmount } from "./utils";
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
const monthAmount = await getMonthAmout({
	to: new Date(),
	from: new Date().setMonth(new Date().getMonth() - 22),
});
const totalAmount = await getTotalAmount({
	to: new Date(),
	from: new Date(new Date().getFullYear(), new Date().getMonth(),1),
});

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const options = {
	responsive: true,
	scales: {
		yAxes: [
			{
				ticks: {
					reverse: false,
					beginAtZero: true,
					stepSize: 1,
				},
			},
		],
	},

};
const labels = monthAmount.map((item, i) => {
	if (i < 10) return Object.keys(item);
});

export const data = {
	labels,
	datasets: [
		{
			label: "Servicios",
			data: monthAmount.map((item) => Object.values(item) * 1),
			backgroundColor: "rgba(63, 131, 248, 0.5)",
		},
	],
};

console.log(monthAmount);
console.log(totalAmount);
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
									body={<div> <p className="text-green-500/75 text-5xl font-bold"> $ {!totalAmount ? '0': totalAmount} </p></div>}
								/>
							</div>
							<div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
								<Card
									head={"otro dato"}
									editar={false}
									title={"card"}
									body={<div> ola </div>}
								/>
							</div>
							<div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
								<Card
									head={"otro dato"}
									editar={false}
									title={"card"}
									body={<div> ola </div>}
								/>
							</div>
						</div>
						<div className="mt-2 flex flex-row items-center  px-10">
							<Card
								head={"Servicios contratados este mes"}
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
