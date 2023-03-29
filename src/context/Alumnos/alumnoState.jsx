import React, { useReducer } from "react";
import { baseURL } from "../../config";
import axios from "axios";
import AlumnoContex from "../Alumnos/alumnoContext";
import AlumnoReducer from "./alumnoReduce";
import {
	GET_ALUMNOS,
	GET_ALUMNO,
	PUT_ALUMNO,
	SET_PAGINATION,
	GET_SERVICIOS_ALUMNO,
} from "../Alumnos/types";
const url = `${baseURL}/alumnos`;
const AlumnoState = (props) => {
	const initialState = {
		pagination: {
			page: 1,
			limit: 5,
		},
		alumnos: [],
		totalAlumnos: 0,
		selectedAlumno: null,
		serviciosAlumno: [],
	};
	const [state, dispatch] = useReducer(AlumnoReducer, initialState);

	const getAlumnos = async ({ page = 1, limit = 5 }) => {
		const fullUrl = `${url}/?limit=${limit}&page=${page}`;
		const headers = {
			"x-token": localStorage.getItem("jwt"),
		};
		try {
			const res = await axios.get(`${fullUrl}`, { headers });
			initialState.totalAlumnos = res.data.total;
			const { Alumnos } = res.data;
			dispatch({ type: GET_ALUMNOS, payload: Alumnos });
			return Alumnos;
		} catch (error) {
			console.log(error);
		}
	};
	const setAlumno = (alumno) => {
		dispatch({ type: GET_ALUMNO, payload: alumno });
	};
	const getServiciosAlumno = async (Id) => {
		const fullUrl = `${url}/servicios/${Id}`;
		const headers = {
			"x-token": localStorage.getItem("hwt"),
		};
		try {
			const res = await axios.get(`${fullUrl}`, { headers });
			const { servicios } = res.data;
			console.log(servicios);
			dispatch({ type: GET_SERVICIOS_ALUMNO, payload: servicios });
		} catch (error) {
			console.log(error);
		}
	};

	const putAlumno = async (data) => {
		const { Id, ...body } = data;
		const final = `${url}/${Id}`;
		const headers = {
			"x-token": localStorage.getItem("jwt"),
		};

		const res = await axios.put(`${final}`, body, { headers });
		const { alumno } = res.data;
		dispatch({ type: PUT_ALUMNO, payload: body });
		await getAlumnos(
			initialState.pagination.page,
			initialState.pagination.limit
		);
		return new Promise((resolve, reject) => {
			if (res.status === 200) {
				resolve(alumno);
			} else {
				reject(new Error("Error al actualizar el alumno"));
			}
		});
	};
	const setPagination = async ({ page, limit }) => {
		const pagination = {
			page,
			limit,
		};
		dispatch({ type: SET_PAGINATION, payload: pagination });
		getAlumnos(page, limit);
	};
	return (
		<AlumnoContex.Provider
			value={{
				alumnos: state.alumnos,
				selectedAlumno: state.selectedAlumno,
				totalAlumnos: state.totalAlumnos,
				pagination: state.pagination,
				serviciosAlumno: state.serviciosAlumno,
				getAlumnos,
				setAlumno,
				putAlumno,
				setPagination,
				getServiciosAlumno,
			}}
		>
			{props.children}
		</AlumnoContex.Provider>
	);
};
export default AlumnoState;
