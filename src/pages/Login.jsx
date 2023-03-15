import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

import { useAuthContext } from './../context/auth/auth-context';
import adminLogin from "../utils/login";
import { PRIVATE } from "../config/router/paths";
document.title = "Login";
const BadLogin = () => (
	<p className="text-red-600 py-5">
		La contraseña o el usuario que ingresaste es incorrecto
	</p>
);

document.getElementById("root").className = "h-full";
const Login = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isCorrect, setIsCorrect] = useState(true);
	return (
		<div className="flex flex-row  items-center justify-center h-full w-full">
			<div className="bg-white rounded-xl text-white w-4/5  container flex flex-row justify-center items-center">
				<div className=" flex flex-col items-center w-1/2 h-1/2">
					<form id="FormLogin" className="w-2/3  h-fit rounded-lg p-10">
						<div className="border-b pb-6">
							<h1 className="text-black/75 text-center font-sans font-bold text-6xl">
								Bienvenido
							</h1>
						</div>
						<div className="mb-6">
							<label
								for="email"
								className="block mb-2 text-sm font-medium text-black dark:text-white"
							>
								Correo electrónico
							</label>
							<input
								type="email"
								id="email"
								className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="correo electrónico"
								required
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setIsCorrect(true);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								for="password"
								className="block mb-2 text-sm font-medium text-black dark:text-white"
							>
								Contraseña
							</label>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setIsCorrect(true);
								}}
								type="password"
								placeholder="Contraseña"
								id="password"
								className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>

						<div className="w-full flex flex-col items-center justify-center">
							{isCorrect ? null : <BadLogin />}
							<button
								onClick={(e) => {
								
									const admin = {
										Correo: email,
										Password: password,
									};
									login({correo:email, password:password}).then(
										() => {
											navigate(`${PRIVATE}/Servicios`);
										}
									)
								}}
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Iniciar sesion
							</button>
						</div>
					</form>
				</div>
				<div className="w-1/2 h-1/2">
					<img
						className="rounded-tr-xl  rounded-br-xl"
						src="https://i.pinimg.com/originals/d5/f8/37/d5f837f81669f9e7706c99e4dbc66687.jpg"
						alt="Login"
					/>
				</div>
			</div>
		</div>
	);
};
export default Login;
