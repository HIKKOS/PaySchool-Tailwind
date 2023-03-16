import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../config";
import axios from "axios";
import TutoresContext from "./tutoresContext";
import TutoresReducer from "./tutoresReduce";
import Swal from "sweetalert2";
import {
	GET_TUTORES,
	GET_TUTOR,
	PUT_TUTOR,
	SET_PAGINATION,
	GET_TUTORADOS,
} from "../Tutores/types";
import { PRIVATE } from "../../config/router/paths";
const url = `${baseURL}/tutores`;
const TutorState = (props) => {
	const initialState = {
		pagination: {
			page: 1,
			limit: 5,
		},
		tutores: [],
		totalTutores: 0,
		selectedTutor: null,
		tutorados: [],
	};
	const [state, dispatch] = useReducer(TutoresReducer, initialState);

	const getTutores = async (page = 1, limit = 5) => {
		const fullUrl = `${url}/?limit=${limit}&page=${page}`;
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
			const res = await axios.get(`${fullUrl}`, { headers });
			initialState.totalTutores = res.data.total;
			const { Tutores: tutores } = res.data;
			dispatch({ type: GET_TUTORES, payload: tutores });
		} catch (error) {
			console.log(error);
		}
	};
	const setTutor = (tutor) => {
		dispatch({ type: GET_TUTOR, payload: tutor });
		setTutorados(tutor.Id);
	};
	const setTutorados = async (Id) => {
		const fullUrl = `${url}/tutorados/web/${Id}`;
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
			const res = await axios.get(`${fullUrl}`, { headers });
			if (res.status === 200) {
				const { tutorados } = res.data;
				console.log(tutorados);
				dispatch({ type: GET_TUTORADOS, payload: tutorados });
			} else {
				dispatch({ type: GET_TUTORADOS, payload: null });
			}
		} catch (err) {}
	};
	const putTutorados = async (alumno, tutorId) => {
		const fullUrl = `${baseURL}/tutores/quitar-tutorado`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};
		const body = {
			AlumnosIds: [alumno.Id],
		};
		console.log(body);
		try {
			const res = await axios.put(`${fullUrl}`, body, { headers });
			if (res.status === 200) {
				setTutorados(tutorId);
			}
		} catch (err) {
			console.log(err);
		}
	};
	const putTutor = (data) => {
		const { Id, body } = data;
		const fullUrl = `${url}/web/${Id}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};
		console.log(body);
		axios.put(`${fullUrl}`, body, { headers }).then(res => {
			location.href = `${PRIVATE}/Tutores`;
		}).catch(rej => Swal.fire({
			title:'Ya existe ese dato',
			icon:'error',
			showCancelButton:true,
		}))
		getTutores(initialState.pagination.page, initialState.pagination.limit);
	};
	const postTutorados = async (tutorados , tutorId) => {
		const fullUrl = `${baseURL}/tutores/agregar-tutorados`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};
		const body = {
			TutorId: tutorId,
			tutorados: tutorados,
		};
		const res = await axios.put(`${fullUrl}`, body, { headers });
		console.log(res);
		if (res.status === 200) {	
			setTutorados(tutorId)
			Swal.fire({
				title: 'Agregado',
			
				icon: 'info',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
	
				confirmButtonText: 'Aceptar',
		
				
			  }).then((result) => {
				if (result.isConfirmed) {
					location.href = "/Tutores"									 
				}
			  })
			
			
		}
	};
	const setPagination = async ({ page, limit }) => {
		const pagination = {
			page,
			limit,
		};
		dispatch({ type: SET_PAGINATION, payload: pagination });
		getTutores(page, limit);
	};
	return (
		<TutoresContext.Provider
			value={{
				tutores: state.tutores,
				selectedTutor: state.selectedTutor,
				totalTutores: state.totalTutores,
				pagination: state.pagination,
				tutorados: state.tutorados,
				getTutores,
				setTutor,
				putTutor,
				setPagination,
				setTutorados,
				putTutorados,
				postTutorados,
			}}
		>
			{props.children}
		</TutoresContext.Provider>
	);
};
export default TutorState;
