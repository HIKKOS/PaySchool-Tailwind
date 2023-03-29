import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/router/paths";
import { useAuthContext } from "./auth-context";

export default function PrivateRoute() {
	const { isAuthenticated } = useAuthContext();
	console.log(Cookies.get('jwt'));
	if (!Cookies.get("jwt") ) {
		return <Navigate to={LOGIN} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
