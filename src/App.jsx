import "../src/index.css";

import EditarServicios from "./pages/Servicios/EditarServicio";
import AgregarServicio from "./pages/Servicios/AgregarServicio";
import AlumnoState from "./context/Alumnos/alumnoState";

import Servicios from "./pages/Servicios/Servicios";
import Login from "./pages/Login";
import Alumnos from "./pages/Alumnos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiciosPage from "./pages/Servicios/ServiciosPage";
const routerServicios = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
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
		path: "/Servicios",
		element: <ServiciosPage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={routerServicios} />
		</>
	);
}

export default App;
