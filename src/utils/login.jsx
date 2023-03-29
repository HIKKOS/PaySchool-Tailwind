import axios from "axios";
import Cookies from "js-cookie";
import { baseURL } from "../config";
const login = async (user) => {
	return new Promise((resolve, reject) => {
		const url = `${baseURL}/login/admin`;
		const admin = {
			Correo: user.Correo,
			Password: user.Password,
		};
		axios
			.post(url, admin)
			.then((res) => {
				if (res.status === 200) {
					axios
						.get(`${baseURL}/login/getAdminInfo`, {
							headers: {
								"x-token": res.data.jwt,
							},
						})
						.then((resp) => {
							const data = {
								jwt: res.data.jwt,
								user:resp.data,
							};
							resolve(data);
						});
				}
			})
			.catch((err) => {
				reject(new Error("Error al iniciar sesion"));
			});
	});
};

export default login;
