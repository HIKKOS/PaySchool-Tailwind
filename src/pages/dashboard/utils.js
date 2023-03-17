import axios from "axios";
import { baseURL } from "../../config";
export const getMonthAmout = ({from, to}) => {
	return new Promise((resolve, reject) => {
		const mes = from.getMonth();
		const anio = from.getFullYear();
		const dia = from.getDate();
        
		axios
			.get(
				`${baseURL}/dashboard/servicios/por-rango/${anio}-${mes <= 9 ? `0${mes-1}` : mes-1}-${dia}/${anio}-${mes <= 9 ? `0${mes}` : mes}-${dia}`,
                {headers: {
                    'x-token':localStorage.getItem('jwt')
                }}
			)
			.then((res) => {
				console.log(res.data);
				resolve(res.data);
			}).catch(
                (err) => {
                    console.log(err);
                    reject(err)
                }
            )
	});
};
