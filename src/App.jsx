import "../src/index.css";
import Servicios from "./pages/Servicios";

import EditarServicios from "./pages/EditarServicio";
import AgregarServicio from './pages/AgregarServicio'
import ServicioState from "./context/Servicio/ServicioState";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Login/>
	},

	{
		path: "/servicios/editar",
		element: <EditarServicios />,
	},
	{
		path: "/servicios/agregar",
		element: <AgregarServicio />,
	},
	{
		path: "/servicios",
		element: <Servicios />,
	},
]);

function App() {
	return (
		<ServicioState>
			<RouterProvider router={router} />
		</ServicioState>
	);
}

export default App;
