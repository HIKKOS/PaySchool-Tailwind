import axios from "axios"
export const getAllServicios = async() => {
    const urlBase = 'http://localhost:8080/api/servicios'
    let jwt
    if(!localStorage.getItem('jwt')){
        jwt = ''
    } else {
        jwt = localStorage.getItem('jwt')
    }
    const headers = {
       'x-token': jwt
    }
    try {
        const res = await axios.get(`${urlBase}`, { headers });
        const { servicios } = res.data  
        return servicios
    } catch (error) {
      console.log(error);
    }
}
