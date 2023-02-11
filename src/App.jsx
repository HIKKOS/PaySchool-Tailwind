import '../src/index.css'
import Servicios from './pages/Servicios/Servicios';

import EditarServicios from './pages/Servicios/EditarServicio';
import ServicioState from './context/Servicio/ServicioState';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},

	{
		path: "/servicios/editar",
		element: <EditarServicios />,
	},
	{
		path: "/servicios",
		element: <Servicios />,
	},
]);

function App() {
	
    return (
        <ServicioState>       
            <RouterProvider router={router}/>            
        </ServicioState>
    )

}

export default App;
