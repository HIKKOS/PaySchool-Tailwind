import React, { useReducer } from "react";
import axios from "axios";
import ServicioContext from "../Servicio/ServicioContext";
import ServicioReducer from "./ServicioReduce";
import { GET_SERVICIOS, GET_SERVICIO, PUT_SERVICIO } from "../servicio/types";
const ServicioState = (props) => {
	const initialState = {
		servicios: [],
		selectedService: null,
	};
	const [state, dispatch] = useReducer(ServicioReducer, initialState);
	
	const getServicios = async () => {
		const urlBase = "http://localhost:8080/api/servicios";
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
			const res = await axios.get(`${urlBase}`, { headers });
			const { servicios } = res.data;
			dispatch({ type: GET_SERVICIOS, payload: servicios });
		} catch (error) {
			console.log(error);
		}
	};
	const setServicio = ( servicio ) => {
		dispatch({ type: GET_SERVICIO, payload: servicio });
	}
	const getServicio = async( servicio ) => {
	 	const urlBase = `http://localhost:8080/api/servicios?Id=${id}`;
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
		 	const res = await axios.get(`${urlBase}`, { headers });
			const servicio = res.data; 
			dispatch({ type: GET_SERVICIO, payload: servicio });
		} catch (error) {
			console.log(error);
		}
	};
	const putServicio = async ( data ) => {
		const {Id, ...body} = data
		const urlBase = `http://localhost:8080/api/servicios/${Id}`;
		let jwt;
		if (!localStorage.getItem("jwt")) {
			jwt = "";
		} else {
			jwt = localStorage.getItem("jwt");
		}
		const headers = {
			"x-token": jwt,
		};
		
		const res = await axios.put(`${urlBase}`, body, { headers });
		const { servicio } = res.data;
		dispatch({ type: PUT_SERVICIO, payload: body });
		getServicios();
	}
	return (
		<ServicioContext.Provider
			value={{
				servicios: state.servicios,
				selectedService: state.selectedService,
				getServicios,
				setServicio,
				getServicio,
				putServicio,

			}}
		>
			{props.children}
		</ServicioContext.Provider>
	);
};
export default ServicioState;
