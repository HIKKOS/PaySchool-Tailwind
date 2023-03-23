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
import AgregarAlumno from "./pages/alumnos/Agregar-alumno";

import ServiciosAlumno from "./pages/alumnos/servicios-alumnos";
import TutorState from "./context/Tutores/tutoresState";
import Tutores from "./pages/tutores/tutores";
import AgregarTutorado from "./pages/tutores/agregar-tutorado";
import PrivateRoute from "./context/auth/PrivateRoutes";
import PublicRoute from "./context/auth/PublicRoute";
import AgregarServicioAlumno from "./pages/alumnos/agregar-servicio-alumno";
import { AuthContext, AuthProvider } from "./context/auth/auth-context";
import { LOGIN, PRIVATE } from "./config/router/paths";
import Dashboard from "./pages/dashboard/dashboard";
import Pagos from "./pages/Pagos/Pagos";
import AgregarTutor from "./pages/tutores/agregar-tutor";
import EditarImagenes from "./pages/Servicios/editar-imagenes";

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
		<AuthProvider>
			<Router>
				<Routes>
					<Route exact index path={'/'} element={<Login />} />						
					<Route path={PRIVATE} element={<PrivateRoute />}>
						<Route
						
							path={`${PRIVATE}/Dashboard`}
							element={
								<ServiciosStates>
									<Dashboard />
								</ServiciosStates>
							}
						/>
						<Route
						index
							path={`${PRIVATE}/Servicios`}
							element={
								<ServiciosStates>
									<Servicios />
								</ServiciosStates>
							}
						/>
						<Route
							path={`${PRIVATE}/servicio/editar`}
							element={
								<ServiciosStates>
									<EditarServicios />
								</ServiciosStates>
							}
						/>
						<Route
							path={`${PRIVATE}/servicio/editar/imagenes`}
							element={
								<ServiciosStates>
									<EditarImagenes />
								</ServiciosStates>
							}
						/>
						<Route
							path={`${PRIVATE}/Servicios/agregar`}
							element={
								<ServiciosStates>
									<AgregarServicio />
								</ServiciosStates>
							}
						/>
						<Route
							path={`${PRIVATE}/Alumnos`}
							element={
								<AlumnoState>
									<Alumnos />
								</AlumnoState>
							}
						/>
						<Route
							path={`${PRIVATE}/Alumnos/agregar`}
							element={<AgregarAlumno />}
						/>
						<Route
							path={`${PRIVATE}Alumnos/Servicios`}
							element={
								<AlumnoState>
									<ServiciosAlumno />
								</AlumnoState>
							}
						/>
						<Route
							path={`${PRIVATE}/Alumnos/Servicios/Contratar`}
							element={
								<AlumnoState>
									<AgregarServicioAlumno />
								</AlumnoState>
							}
						/>
						<Route
							path={`${PRIVATE}/Alumnos/editar`}
							element={
								<AlumnoState>
									<EditarAlumno />
								</AlumnoState>
							}
						/>
						<Route
							path={`${PRIVATE}/Tutores`}
							element={
								<TutorState>
									<Tutores />
								</TutorState>
							}
						/>
						<Route
							path={`${PRIVATE}/Tutores/agregar`}
							element={<AgregarTutor />}
						/>
						<Route
							path={`${PRIVATE}/Tutor/editar`}
							element={
								<TutorState>
									<EditarTutor />
								</TutorState>
							}
						/>
						<Route
							path={`${PRIVATE}/Tutor/Agregar-tutorado`}
							element={
								<TutorState>
									<AgregarTutorado />
								</TutorState>
							}
						/>
						<Route path={`${PRIVATE}/Pagos`} element={<Pagos />} />
					</Route>  
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
