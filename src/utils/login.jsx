import axios from "axios";
import {baseURL } from "../config";
const login = async (user) => {
	try {
		const url = `${baseURL}/login/admin`;
    console.log(url);
		const admin = {
			Correo: user.Correo,
			Password: user.Password,
		};
		const res = await axios.post(url, admin);
		if (res.status === 200) {
			const { data } = res;
			const { jwt } = data;
			localStorage.setItem("jwt", jwt);
			console.log(jwt);
			location.href = "/servicios";
			return true
		} else {
			alert("no");
			return false
		}
	} catch (error) {
		console.log({ error });
		return false
	}
};
export default login;
