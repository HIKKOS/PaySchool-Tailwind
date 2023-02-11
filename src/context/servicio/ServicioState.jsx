import React, { useReducer } from "react";
import axios from "axios";
import  ServicioContext  from "../Servicio/ServicioContext";
import ServicioReducer from "./ServicioReduce";
const ServicioState = (props) => {
	const initialState = {
		servicios: [],
		selectedService: null,
	};
	const [state, dispatch] = useReducer(ServicioReducer,initialState);
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
            console.log(servicios);
            
            dispatch({
                type:'GET_SERVICIOS',
                payload: servicios
            })			
		} catch (error) {
			console.log(error);
		}
        
	};
	const getServicio= async(id) =>{
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
			const { servicios = [] } = res.data;
            const servicio = servicios.find( s => s.Id = id )        
			console.log(servicio)    
            dispatch({
                type:GET_SERVICIO,
                payload: servicio
            })			
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<ServicioContext.Provider
			value={{
				servicio: state.servicios,
				selectedService: state.selectedService,
				getServicios,
				getServicio,
			}}
		>
			{props.children}
		</ServicioContext.Provider>
	);
};
export default ServicioState;
