import { GET_ALUMNOS, GET_ALUMNO ,PUT_ALUMNO, SET_PAGINATION, GET_SERVICIOS_ALUMNO } from "../Alumnos/types"

const AlumnoReducer = ( state, action ) => {
	const { payload, type } = action;
	switch (type) {
		case GET_ALUMNOS:
			return {
				...state,
				alumnos: payload,
			};
		case GET_ALUMNO:
			return {
				...state,
				selectedAlumno: payload,
			};	
		case PUT_ALUMNO:
			return {
				...state,
				alumno: payload,
			};
		case SET_PAGINATION:
			return {
			...state,
			pagination: payload,
			};		
		case GET_SERVICIOS_ALUMNO:
			return {
				...state,
				serviciosAlumno: payload,
			};
		default:
			return state
	}
};
export default AlumnoReducer;
