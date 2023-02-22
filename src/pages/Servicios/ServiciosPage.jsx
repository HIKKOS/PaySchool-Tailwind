import React from 'react'
import ServicioState from "../../context/Servicio/ServicioState" 
import Servicios from './Servicios'
const ServiciosPage = () => {
    return(
        <ServicioState>		
            <Servicios/>
        </ServicioState>		
    )
}
export default ServiciosPage