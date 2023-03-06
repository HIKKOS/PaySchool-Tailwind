import React, { useReducer } from "react";
import { baseURL } from "../../config";
import axios from "axios";
import ServicioContext from "../Servicio/ServicioContext";
import ServicioReducer from "./ServicioReduce";
import { GET_SERVICIOS, GET_SERVICIO, PUT_SERVICIO, SET_PAGINATION } from "../servicio/types";
const urlBase = `${baseURL}/servicios`
const ServicioState = (props) => {
	const initialState = {
		pagination: {
			page:1,
			limit:5
		},
		servicios: [],
		totalServicios: 0,
		selectedService: null,
	};
	const [state, dispatch] = useReducer(ServicioReducer, initialState);

	const getServicios = async (page = 1 , limit = 5) => {
		const query = `?limit=${limit}&page=${page}&dataFor=web`;
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
			const res = await axios.get(`${urlBase}${query}`, { headers });				
			initialState.totalServicios = res.data.total;
			const { Servicios } = res.data;		
			dispatch({ type: GET_SERVICIOS, payload: Servicios });
		} catch (error) {
			console.log(error);
		}
	
	};
	const setServicio = ( servicio ) => {
		dispatch({ type: GET_SERVICIO, payload: servicio });		
	};
	
	const putServicio = async (data) => {
		const { Id, ...body } = data;
		const query = `/${Id}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};

		const res = await axios.put(`${urlBase}${query}`, body, { headers });
		const { servicio } = res.data;
		dispatch({ type: PUT_SERVICIO, payload: body });
		getServicios();
	};
	const postPhoto = async (Id, data) => {
		const url = `${baseURL}/uploads/${Id}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
			'Content-Type': 'multipart/form-data'
		};
		console.log(data.archivo);
		await axios.post(`${url}`, data, {headers});
		getServicios();
	};
	const delPhoto = async (Id, data) => {
		const url = `${baseURL}/uploads/${servicioId}/${FotoId}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
			'Content-Type': 'multipart/form-data'
		};
		console.log(data.archivo);
		await axios.post(`${url}`, data, {headers});
		getServicios();
	};
	const setPagination = async ({page, limit}) => {
		const pagination = {
			page,
			limit
		}
		dispatch({ type: SET_PAGINATION, payload: pagination })
		getServicios(page, limit);
	}
	return (
		<ServicioContext.Provider
			value={{
				servicios: state.servicios,
				selectedService: state.selectedService,
				totalServicios: state.totalServicios,
				pagination: state.pagination,
				getServicios,
				setServicio,
				putServicio,
				postPhoto,
				delPhoto,
				setPagination,

			}}
		>
			{props.children}
		</ServicioContext.Provider>
	);
};
export default ServicioState;
