import "../src/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditarServicios from "./pages/Servicios/EditarServicio";
import EditarAlumno from "./pages/alumnos/EditarAlumno";
import EditarTutor from "./pages/tutores/editar-tutor";
import AgregarServicio from "./pages/Servicios/AgregarServicio";
import AlumnoState from "./context/Alumnos/alumnoState";
import ServiciosStates from "./context/Servicio/ServicioState";

import Servicios from "./pages/Servicios/Servicios";
import Login from "./pages/Login";
import Alumnos from "./pages/alumnos/Alumnos";

import ServiciosAlumno from "./pages/alumnos/servicios-alumnos";
import TutorState from "./context/Tutores/tutoresState";
import Tutores from "./pages/tutores/tutores";
import AgregarTutorado from "./pages/tutores/agregar-tutorado";
import PrivateRoute from "./context/auth/PrivateRoutes";
import AgregarServicioAlumno from "./pages/alumnos/agregar-servicio-alumno";
import { AuthProvider } from "./context/auth/auth-context";

/* const routerServicios = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/servicio/editar",
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
			<PrivateRoute>
				<ServiciosStates>
					<Servicios />
				</ServiciosStates>
			</PrivateRoute>
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
		path: "/Alumnos/Servicios/Contratar",
		element: (
			<AlumnoState>
				<AgregarServicioAlumno />
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
			<div>
				<TutorState>
					<AgregarTutorado />
				</TutorState>
			</div>
		),
	},
]); */

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					index
					element={
						<AuthProvider>
							{" "}
							<Login />{" "}
						</AuthProvider>
					}
				/>
				<Route
					path="/Servicios"
					element={
						<ServiciosStates>
							<Servicios />
						</ServiciosStates>
					}
				/>
				<Route
					path='/servicio/editar'
					element={
						<ServiciosStates>
							<EditarServicios />
						</ServiciosStates>
					}
				/>
				<Route
					path='/Servicios/agregar'
					element={
						<ServiciosStates>
							<AgregarServicio />
						</ServiciosStates>
					}
				/>
				<Route
					path='/Alumnos'
					element={
						<AlumnoState>
							<Alumnos />
						</AlumnoState>
					}
				/>
				<Route
					path='Alumnos/Servicios'
					element={
						<AlumnoState>
							<ServiciosAlumno />
						</AlumnoState>
					}
				/>
				<Route
					path='Alumnos/Servicios/Contratar'
					element={
						<AlumnoState>
							<AgregarServicioAlumno />
						</AlumnoState>
					}
				/>
				<Route
					path='/Alumnos/editar'
					element={
						<AlumnoState>
							<EditarAlumno />
						</AlumnoState>
					}
				/>
				<Route
					path='/Tutores'
					element={
						<TutorState>
							<Tutores />
						</TutorState>
					}
				/>
				<Route
					path="/Tutor/editar"
					element={
						<TutorState>
							<EditarTutor />
						</TutorState>
					}
				/>
				<Route
					path="/Tutor/Agregar-tutorado"
					element={
						<TutorState>
							<AgregarTutorado />
						</TutorState>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
