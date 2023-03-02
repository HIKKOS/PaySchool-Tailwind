import {
	GET_TUTORES,
	GET_TUTOR,
	PUT_TUTOR,
	SET_PAGINATION,
	GET_TUTORADOS,
} from "../Tutores/types";

const TutoresReducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_TUTORES:
			return {
				...state,
				tutores: payload,
			};
		case GET_TUTOR:
			return {
				...state,
				selectedTutor: payload,
			};
		case GET_TUTORADOS:
			return {
				...state,
				tutorados: payload,
			};
		case PUT_TUTOR:
			return {
				...state,
				tutor: payload,
			};
		case SET_PAGINATION:
			return {
				...state,
				pagination: payload,
			};
		default:
			return state;
	}
};
export default TutoresReducer;
