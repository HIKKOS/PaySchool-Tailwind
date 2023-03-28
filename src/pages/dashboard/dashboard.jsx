import React, { useState, useMemo } from "react";
import Card from "../common/Card";
import {
	getMonthAmout,
	getTotalPagos,
	getTotalServicesAmount,
	getTotalUsuarios,
} from "./utils";
import { IconChartLine, IconCalendar, IconUser } from "@tabler/icons-react";
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
import Layout from "../common/Layout";
const options = {
	responsive: true,
	scales: {
		yAxes: [
			{				
				ticks: {
					min:0,
					max:10,
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
	Legend
);

const Dashboard = () => {
	document.title = "PaySchool - Dashboard";
	const [monthAmount, setMonthAmount] = useState([]);
	const [yearlyAmount, setYearlyAmount] = useState([]);
	const [servicesArray, setServicesArray] = useState([]);
	const [totalUsers, setTotalUsers] = useState([]);
	const [totalPago, setTotalPagos] = useState([]);


	const memoMonthAmount = useMemo(() => {
		if (monthAmount.length === 0) {
			getMonthAmout({
				to: new Date(),
				from: new Date().setMonth(new Date().getMonth() - 22),
			}).then((res) => {
				setMonthAmount(res.total);
			});
		}
		return monthAmount;
	}, [monthAmount]);
	const memoYearAmount = useMemo(() => {
		if (yearlyAmount.length === 0) {
			getMonthAmout({
				to: new Date(),
				from: new Date().setMonth(1),
			}).then((res) => {
				setYearlyAmount(res.total);
			});
		}
		return monthAmount;
	}, [monthAmount]);
	const memoServicesArray = useMemo(() => {
		if (servicesArray.length === 0) {
			getTotalServicesAmount({
				to: new Date(),
				from: new Date(
					new Date().getFullYear(),
					new Date().getMonth(),
					1
				),
			}).then((res) => {
				console.log(res);
				setServicesArray(res);
			});
		}
		return servicesArray;
	}, [servicesArray]);
	const memoTotalUsers = useMemo(() => {
		if (totalUsers.length === 0) {
			getTotalUsuarios().then((res) => {
				setTotalUsers(res.total);
			});
		}
		return totalUsers;
	}, [totalUsers]);
	const memoTotalPagos = useMemo(() => {
		if (totalUsers.length === 0) {
			getTotalPagos({
				to: new Date(),
				from: new Date().setMonth(new Date().getMonth() - 22),
			}).then((res) => {
				setTotalPagos(Number(res.total));
			});
		}
		return totalPago;
	}, [totalPago]);
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center w-full my-2">
				<div className="mb-3 flex flex-row w-full mx-10 gap-3">
					<Card
						head={
							<div className="flex flex-row justify-between items-center">
								Ingresos Mensuales {<IconChartLine size={40} />}
							</div>
						}
						editar={false}
						title={"card"}
						body={
							<div>
								<p className=" text-blue-800 text-5xl font-bold">
									${!memoMonthAmount ? "0" : memoMonthAmount}
								</p>
							</div>
						}
					/>
					<Card
						head={
							<div className="flex flex-row justify-between">
								Pagos esta semana {<IconCalendar size={40} />}
							</div>
						}
						editar={false}
						title={"card"}
						body={
							<div>
								<p className=" text-blue-800 text-5xl font-bold">
									{!memoTotalPagos ? "0" : memoTotalPagos}
								</p>
							</div>
						}
					/>
					<Card
						head={
							<div className="flex flex-row justify-between">
								Usuarios{<IconUser size={40} />}
							</div>
						}
						editar={false}
						title={"card"}
						body={
							<div>
								<p className=" text-blue-800 text-5xl font-bold">
									{!memoTotalUsers ? "0" : memoTotalUsers}
								</p>
							</div>
						}
					/>
				</div>
				<div className="flex flex-row items-center w-full justify-center">
					<Card
						head={"Servicios contratados este mes"}
						editar={false}
						title={"card"}
						body={
							<Bar
								options={options}
								data={{
									labels: memoServicesArray.map((item, i) => {
										if (i < 10) return Object.keys(item);
									}),
									datasets: [
										{
											label: "Servicios",
											data: memoServicesArray.map(
												(item) =>
													Object.values(item) * 1
											),
											backgroundColor:
												"rgba(63, 131, 248, 0.8)",
										},
									],
								}}
							/>
						}
					/>
				</div>
			</div>
		</Layout>
	);
};
export default Dashboard;
