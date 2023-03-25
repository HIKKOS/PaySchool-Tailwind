import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/router/paths";
import { useAuthContext } from "./auth-context";

export default function PrivateRoute() {
	const { isAuthenticated } = useAuthContext();

	if (localStorage.getItem("user") === null) {
		return <Navigate to={LOGIN} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
