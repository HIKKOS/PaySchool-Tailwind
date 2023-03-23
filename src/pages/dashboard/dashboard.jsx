import React, { useState, useEffect, useMemo } from "react";
import TopNavBar from "../common/topBar";
import Sidebar from "../common/Sidebar/sideBar";
import Card from "../common/Card";
import axios from "axios";
import Footer from "../common/Footer/Footer";
import { getMonthAmout, getTotalServicesAmount } from "./utils";
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
	Legend
);

const Dashboard = () => {
	const [monthAmount, setMonthAmount] = useState([]);
	const [yearlyAmount, setYearlyAmount] = useState([]);
	const [servicesArray, setServicesArray] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

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
	return (
		<div className="container max-w-full w-full ">
			<div className="flex flex-col w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row">
					<Sidebar selectedIndex={0} />
					<div className="flex flex-col items-center justify-center w-full my-2">
						<div className="mb-3 flex flex-row w-full mx-10 gap-3">
							<Card
								head={"Ingresos Mensuales"}
								editar={false}
								title={"card"}
								body={
									<div>
										<p className="text-green-500/75 text-5xl font-bold">
											$
											{!memoMonthAmount
												? "0"
												: memoMonthAmount}
										</p>
									</div>
								}
							/>
							<Card
								head={"Ingresos Anuales"}
								editar={false}
								title={"card"}
								body={
									<div>
										<p className="text-green-500/75 text-5xl font-bold">
											$
											{!memoYearAmount
												? "0"
												: memoYearAmount}{" "}
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
											labels: memoServicesArray.map(
												(item, i) => {
													if (i < 10)
														return Object.keys(
															item
														);
												}
											),
											datasets: [
												{
													label: "Servicios",
													data: memoServicesArray.map(
														(item) =>
															Object.values(
																item
															) * 1
													),
													backgroundColor:
														"rgba(63, 131, 248, 0.5)",
												},
											],
										}}
									/>
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
{
	/*  */
}
