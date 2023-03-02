import React, { useReducer } from "react";
import { baseURL } from "../../config";
import axios from "axios";
import TutoresContext from "./tutoresContext";
import TutoresReducer from "./tutoresReduce";
import { GET_TUTORES, GET_TUTOR, PUT_TUTOR, SET_PAGINATION, GET_TUTORADOS } from "../Tutores/types";
const url = `${baseURL}/tutores`;
const TutorState = (props) => {
	const initialState = {
		pagination: {
			page:1,
			limit:5
		},
		tutores: [],
		totalTutores: 0,
		selectedTutor: null,
		tutorados: []
	};
	const [state, dispatch] = useReducer(TutoresReducer, initialState);

	const getTutores = async (page = 1 , limit = 5) => {
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
			const { Tutores:tutores } = res.data;		
			dispatch({ type: GET_TUTORES, payload: tutores });
		} catch (error) {
			console.log(error);
		}
	};
	const setTutor = ( tutor ) => {
		dispatch({ type: GET_TUTOR, payload: tutor });
	};
	const setTutorados = (tutorados = []) => {
		dispatch({ type: GET_TUTORADOS, payload: tutorados });
	}
	const putTutor = async (data) => {
		const { Id, ...body } = data;
		const url = `${url}/${Id}`;
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
		dispatch({ type: PUT_TUTOR, payload: body });
		getTutores(initialState.pagination.page, initialState.pagination.limit);
	};		
	const setPagination = async ({page, limit}) => {
		const pagination = {
			page,
			limit
		}
		dispatch({ type: SET_PAGINATION, payload: pagination })
		getTutores(page, limit);
	}
	return (
		<TutoresContext.Provider
			value={{
				tutores: state.tutores,
				selectedTutor: state.selectedTutor,
				totalTutores: state.totalTutores,
				pagination: state.pagination,
				getTutores,
				setTutor,
				putTutor,	
				setPagination,
				setTutorados
			}}
		>
			{props.children}
		</TutoresContext.Provider>
	);
};
export default TutorState;
