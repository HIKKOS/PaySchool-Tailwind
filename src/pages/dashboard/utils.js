import axios from "axios";
import { baseURL } from "../../config";
export const obtenerFechas = (desdeFecha, hastaFecha) => {
	console.log(desdeFecha, hastaFecha);
	const fechaInicio = new Date(desdeFecha).toISOString().slice(0, 10); // obtener fecha de inicio en formato yyyy-mm-dd
	const fechaFin = new Date(hastaFecha).toISOString().slice(0, 10); // obtener fecha de fin en formato yyyy-mm-dd
	return [fechaInicio, fechaFin];
};

export const getMonthAmout = async ({ from, to }) => {
	[from, to] = obtenerFechas(from, to);
	const res = await axios.get(
		`${baseURL}/dashboard/servicios/por-rango/${from}/${to}`,
		{
			headers: {
				"x-token": localStorage.getItem("jwt"),
			},
		},
	);
	return res.data;
};

export const getTotalAmount = async ({ from, to }) => {
	[from, to] = obtenerFechas(from, to);
	const res = await axios.get(`${baseURL}/dashboard/ingresos/por-rango/${from}/${to}`, {
		headers: {
			"x-token": localStorage.getItem("jwt"),
		},
	});
	return res.data.total;
}