import React, { useState, useEffect, useMemo } from "react";
import TopNavBar from "../common/topBar";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import axios from "axios";
import Footer from "../common/Footer/Footer";
import { getTotalAmount, obtenerFechas } from "./utils";
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
import { baseURL } from "../../config";
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
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const Dashboard = () => {
	const [monthAmount, setMonthAmount] = useState([]);
	const [totalAmount, setTotalAmount] = useState([]);

	const getMonthAmout = async ({ from, to }) => {
		[from, to] = obtenerFechas(from, to);
		const res = await axios.get(
			`${baseURL}/dashboard/ingresos	/por-rango/${from}/${to}`,
			{
				headers: {
					"x-token": localStorage.getItem("jwt"),
				},
			},
		);
		setMonthAmount(res.data.total);
	};
	const memoMonthAmount = useMemo(() => {
		if (monthAmount.length === 0) {
			getMonthAmout({
				to: new Date(),
				from: new Date().setMonth(new Date().getMonth() - 22),
			})
		}
		return monthAmount;
	}, [monthAmount]);
	/* const memoMonthAmount = useMemo(()=> {
		if (monthAmount.length === 0) {
			getMonthAmout({
				to: new Date(),
				from: new Date().setMonth(new Date().getMonth() - 22),
			}).then((res) => {
				setMonthAmount(res);
			});
		  }
		  return datos;
		}, [monthAmount]);
	const memoTotalAmount = useMemo(()=> {
		if (totalAmount.length === 0) {
			getTotalAmount({
				to: new Date(),
				from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
			}).then((res) => {
				setTotalAmount(res);
			});
		  }
		  return datos;
		}, [totalAmount]);
 */
	return (
		<div className="container">
			<div className="flex flex-col  w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row  ">
					<Sidebar selectedIndex={0} />
					<div className="flex flex-col items-center w-full">
						<div className="flex flex-row h-full items-center pt-10">
							<div className="mt-2 flex flex-col justify-start h-full w-full px-10">
								<Card
									head={"Ingresos Mensuales"}
									editar={false}
									title={"card"}
									body={
										<div>
											{" "}
											<p className="text-green-500/75 text-5xl font-bold">
												{" "}
												$ {!memoMonthAmount ? "0" : memoMonthAmount}{" "}
											</p>
										</div>
									}
								/>
							</div>
							{/* <div className="mt-2 flex flex-col items-center h-full w-1/3 px-10">
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
							</div> */}
						</div>
						<div className="flex flex-row my-10 items-center w-full justify-center px-10">
							<Card
								head={"Servicios contratados este mes"}
								editar={false}
								title={"card"}
								body={
									<h1>ola
									</h1>
									
								}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};
export default Dashboard;
{/* <Bar
										options={options}
										data={{
											labels: monthAmount.map((item, i) => {
												if (i < 10) return Object.keys(item);
											}),
											datasets: [
												{
													label: "Servicios",
													data: monthAmount.map(
														(item) => Object.values(item) * 1,
													),
													backgroundColor: "rgba(63, 131, 248, 0.5)",
												},
											],
										}}
									/> */}