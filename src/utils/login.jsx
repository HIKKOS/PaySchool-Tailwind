import axios from "axios";
import { baseURL } from "../config";
import Swal from "sweetalert2";
const login = async(user) =>{
		const url = `${baseURL}/login/admin`;
		const admin = {
			Correo: user.Correo,
			Password: user.Password,
		};
		const res = await axios.post(url, admin)
		if(res.data === "Bad login"){
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Correo o contraseña incorrectos",
			})
			return false
		}
		
	};

export default login;
