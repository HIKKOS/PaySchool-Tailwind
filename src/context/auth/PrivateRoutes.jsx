import React, { useContext } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./auth-context";

function PrivateRoute({ children }) {
	const navigate = useNavigate();
	const { isAuthenticated, user } = useContext(AuthContext);
	return user.rol !== "Administrador" ? (
		<Navigate to={"/"} />
	) : (
		<Navigate to={"/Servicios"} />
	);
}

export default PrivateRoute;
