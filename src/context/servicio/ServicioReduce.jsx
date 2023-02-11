import { GET_SERVICIOS, GET_SERVICIO } from "../Servicio/types";

const ServicioReducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_SERVICIOS:
			return {
				...state,
				servicios: payload,
			};
		case GET_SERVICIO:
			return {
				...state,
				servicio: payload,
			};
		default:
			throw new Error();
	}
};
export default ServicioReducer;
