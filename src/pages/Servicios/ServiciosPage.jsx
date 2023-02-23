import React from 'react'
import ServicioState from '../../context/Servicio/ServicioState'
import EditarServicios from './EditarServicio'
import Servicios from './Servicios'
const ServiciosPage = () => {
    return(
        <ServicioState>		
            <Servicios />
            <EditarServicios />
        </ServicioState>		
    )
}
export default ServiciosPage