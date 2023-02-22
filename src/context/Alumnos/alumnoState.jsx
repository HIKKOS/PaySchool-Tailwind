import React, { useReducer } from "react";
import axios from "axios";
import AlumnoContex from "../Alumnos/alumnoContext";
import AlumnoReducer from "./alumnoReduce";
import { GET_ALUMNOS, GET_ALUMNO, PUT_ALUMNO, SET_PAGINATION } from "../Alumnos/types";
const baseURL = 'http://localhost:8080/api';
const AlumnoState = (props) => {
	const initialState = {
		pagination: {
			page:1,
			limit:5
		},
		alumnos: [],
		totalAlumnos: 0,
		selectedAlumno: null,
	};
	const [state, dispatch] = useReducer(AlumnoReducer, initialState);

	const getAlumnos = async (page = 1 , limit = 5) => {
		const url = `${baseURL}/alumnos?limit=${limit}&page=${page}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};
		try {
			const res = await axios.get(`${url}`, { headers });				
			initialState.totalAlumnos = res.data.total;
			const { Alumnos } = res.data;		

			dispatch({ type: GET_ALUMNOS, payload: Alumnos });
		} catch (error) {
			console.log(error);
		}
	};
	const setAlumno = (alumno) => {
		dispatch({ type: GET_ALUMNO, payload: alumno });
	};
	const putAlumno = async (data) => {
		const { Id, ...body } = data;
		const url = `${baseURL}/api/alumnos/${Id}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};

		const res = await axios.put(`${url}`, body, { headers });
		const { alumno } = res.data;
		dispatch({ type: PUT_ALUMNO, payload: body });
		getAlumnos();
	};		
	const setPagination = async ({page, limit}) => {
		const pagination = {
			page,
			limit
		}
		dispatch({ type: SET_PAGINATION, payload: pagination })
		getAlumnos(page, limit);
	}
	return (
		<AlumnoContex.Provider
			value={{
				alumnos: state.alumnos,
				selectedAlumno: state.selectedAlumno,
				totalAlumnos: state.totalAlumnos,
				pagination: state.pagination,
				getAlumnos,
				setAlumno,
				getAlumnos,
				putAlumno,	
				setPagination,
			}}
		>
			{props.children}
		</AlumnoContex.Provider>
	);
};
export default AlumnoState;
