import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { baseURL } from "../../config";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	const login = ({ correo, password }) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${baseURL}/login/admin`, {
					Correo: correo,
					Password: password,
				})
				.then((res) => {
					if (res.status === 200) {
						localStorage.setItem("jwt", res.data.jwt);
						axios
							.get(`${baseURL}/login/getAdminInfo`, {
								headers: {
									"x-token": `${res.data.jwt}`,
								},
							})
							.then((res) => {
								setUser(res.data);
								const { Id, rol, ...admin } = res.data;
								localStorage.setItem("isAuthUser", true);
								setIsAuthenticated(true);
								resolve(res);
							});
					}
				});
		}).catch((err) => {
			reject(err);
		});
	};

	const logout = () => {
		return new Promise((resolve, reject) => {
			setIsAuthenticated(false);
			setUser({});
			localStorage.removeItem("jwt");
			localStorage.removeItem("user");
			setTimeout(resolve(true), 2000);
		});
	};
	const value = useMemo(
		() => ({
			login,
			logout,
			isAuthenticated,
			user,
		}),
		[isAuthenticated, login, logout, user]
	);
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
AuthProvider.propTypes = {
	children: PropTypes.object,
};
export function useAuthContext() {
	return useContext(AuthContext);
}
