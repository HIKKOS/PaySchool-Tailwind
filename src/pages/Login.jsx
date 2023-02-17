import React, { useState } from "react";
import login from '../utils/login'
import { Link } from "react-router-dom";
document.title = "Login";
document.getElementById('root').className = 'bg-indigo-800 h-full'
const Login = () => {
	const [user,setUser] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className='justify-center items-center flex flex-row w-full h-full'>
			<form className="w-1/3 h-fit rounded-lg p-10 bg-white"  >
				<h1 className="text-center">Login</h1>
				<div className="mb-6">
					<label
						for="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your email
					</label>
					<input
						type="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
						value={user}
						onChange={ e => setUser(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label
						for="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your password
					</label>
					<input
					value={password}
					onChange={ e => setPassword(e.target.value)}
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				
				<div className="w-full flex flex-row justify-center">
					
						<button
						onClick={e => {
							const admin = {
								Correo: user,
								Password:password
							}
			
							login(admin);
						}}
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Iniciar sesion
						</button>
					
				</div >
			</form>
		</div>
	);
};
export default Login;
