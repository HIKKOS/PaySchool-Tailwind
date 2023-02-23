import "../src/index.css";

import EditarServicios from "./pages/Servicios/EditarServicio";
import EditarAlumno from "./pages/alumnos/EditarAlumno";
import AgregarServicio from "./pages/Servicios/AgregarServicio";
import AlumnoState from "./context/Alumnos/alumnoState";
import ServiciosStates from "./context/Servicio/ServicioState";

import Servicios from "./pages/Servicios/Servicios";
import Login from "./pages/Login";
import Alumnos from "./pages/alumnos/Alumnos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routerServicios = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/servicios/editar",
		element: (
			<ServiciosStates>
				<EditarServicios />
			</ServiciosStates>
		),
	},
	{
		path: "/servicios/agregar",
		element: (
			<ServiciosStates>
				<AgregarServicio />
			</ServiciosStates>
		),
	},
	{
		path: "/Servicios",
		element: (
			<ServiciosStates>
				<Servicios />
			</ServiciosStates>
		),
	},
	{
		path: "/Alumnos",
		element: (
			<AlumnoState>
				<Alumnos />
			</AlumnoState>
		),
	},
	{
		path: "/Alumnos/editar",
		element: (
			<AlumnoState>
				<EditarAlumno />
			</AlumnoState>
		),
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
