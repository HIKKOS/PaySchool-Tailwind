import { createContext, useReducer } from "react";
export const SideBarContext = createContext();

const sideBarReducer = (state, action) => {
	const { payload } = action;
	return {
		...state,
		oculto: payload,
	};
};

export const SideBarState = (props) => {
	const initialState = {
		oculto: false,
	};
	const [state, dispatch] = useReducer(sideBarReducer, initialState);
	const setOculto = (oculto) => {
		console.log({ ocultoFromContext: oculto });
		dispatch({ type: "SET_OCULTO", payload: oculto });
	};
	return (
		<SideBarContext.Provider
			value={{
				oculto: state.oculto,
				setOculto,
			}}
		>
			{props.children}
		</SideBarContext.Provider>
	);
};
