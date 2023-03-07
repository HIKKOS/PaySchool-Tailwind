import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserLoggedContex } from "../context/Session/user-logged";
import login from "../utils/login";
document.title = "Login";
const BadLogin = () => (
	<p className="text-red-600 py-5">
		La contraseña o el usuario que ingresaste es incorrecto
	</p>
);

document.getElementById("root").className = "h-full";
const Login = () => {
	const { setUserLogged, userLogged } = useContext(UserLoggedContex)
	if( userLogged ){
		return <Navigate to='/servicios'/>
	}
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [isCorrect, setIsCorrect] = useState(true);	
	return (
		<div className="text-white justify-center items-center flex flex-row w-full h-full">
			<form
				id="FormLogin"
				className="w-1/3 bg-blue-500/20 h-fit rounded-lg p-10"
			>
				<h1 className="text-center">Login</h1>
				<div className="mb-6">
					<label
						for="email"
						className="block mb-2 text-sm font-medium text-white dark:text-white"
					>
						Your email
					</label>
					<input
						type="email"
						id="email"
						className=" bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label
						for="password"
						className="block mb-2 text-sm font-medium text-white dark:text-white"
					>
						Your password
					</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<div className="w-full flex flex-col items-center justify-center">
					{isCorrect ? null : <BadLogin />}
					<button
						onClick={(e) => {
							setIsCorrect(true)
							const admin = {
								Correo: user,
								Password: password,
							};
							login(admin)
								.then(
									(res) => {						
										setUserLogged(res),
										localStorage.setItem("jwt", res)
										
									}
								)
								.catch(e => setIsCorrect(false));
						}}
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Iniciar sesion
					</button>
				</div>
			</form>
		</div>
	);
};
export default Login;
