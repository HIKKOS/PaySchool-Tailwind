import "../src/index.css";

import EditarServicios from "./pages/Servicios/EditarServicio";
import EditarAlumno from "./pages/alumnos/EditarAlumno";
import EditarTutor from "./pages/tutores/editar-tutor";
import AgregarServicio from "./pages/Servicios/AgregarServicio";
import AlumnoState from "./context/Alumnos/alumnoState";
import ServiciosStates from "./context/Servicio/ServicioState";

import Servicios from "./pages/Servicios/Servicios";
import Login from "./pages/Login";
import Alumnos from "./pages/alumnos/Alumnos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoutes/ProtectedRoutes";
import ServiciosAlumno from "./pages/alumnos/servicios-alumnos";
import TutorState from "./context/Tutores/tutoresState";
import Tutores from "./pages/tutores/tutores";
import AgregarTutorado from "./pages/tutores/agregar-tutorado";
import { UserLoggedState } from "./context/Session/user-logged";

const routerServicios = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/servicios/editar",
		element: (
			<ServiciosStates>
				<ProtectedRoute user={null} >
					<EditarServicios />
				</ProtectedRoute >
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
		path: "/Alumnos/Servicios",
		element: (
			<AlumnoState>
				<ServiciosAlumno />
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
	{
		path: "/Tutores",
		element: (
			<TutorState>
				<Tutores />
			</TutorState>
		),
	},
	{
		path: "/Tutor/editar",
		element: (
			<TutorState>
				<EditarTutor />
			</TutorState>
		),
	},
	{
		path: "/Tutor/Agregar-tutorado",
		element: (
			<TutorState>
				<AgregarTutorado />
			</TutorState>
		),
	},
]);

function App() {
	return (
		<UserLoggedState>
			<RouterProvider router={routerServicios} />
		</UserLoggedState>
	);
}

export default App;
