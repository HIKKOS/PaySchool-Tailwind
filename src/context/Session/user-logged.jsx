import axios from "axios";
import { createContext, useContext, useReducer } from 'react';
import { baseURL } from "../../config";

export const UserLoggedContex = createContext(null);
const UserLoggedReduce = (state, action) => {
    const { type, payload } = action
	if(type === 'SET_USER_LOGGED')
    return {
		...state,
		userLogged: payload,
	};
};
export const UserLoggedState = (props) => {
	const initialState = {
		userLogged: null,
	};
	const [state, dispatch] = useReducer(UserLoggedReduce, initialState);

	const setUserLogged =  (jwt) => {
        const fullUrl = `${baseURL}/login/getAdminInfo`;
        const headers = {
            'x-token': jwt
        }
        axios.get(fullUrl, {headers}).then(res => {
			localStorage.setItem("jwt", jwt);			
			const { admin } = res.data;
			dispatch({ type:'SET_USER_LOGGED', payload: admin });			
		});
	};
	return (
		<UserLoggedContex.Provider
			value={{
				userLogged: state.userLogged,
                setUserLogged
			}}
		>
			{props.children}
		</UserLoggedContex.Provider>
	);
};
