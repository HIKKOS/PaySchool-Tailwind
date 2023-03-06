import axios from "axios";
import { baseURL } from "../config";
import Swal from "sweetalert2";
const login = (user) =>
	new Promise((resolve, reject) => {
		const url = `${baseURL}/login/admin`;
		const admin = {
			Correo: user.Correo,
			Password: user.Password,
		};
		axios.post(url, admin).then( (res) => {
			res.status === 200 ? resolve( res.data.jwt ) : reject();
		});
	});

export default login;
