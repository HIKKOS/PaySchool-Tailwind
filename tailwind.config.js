/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js","./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors:{
				'Primary': '#3F83F8'
			}
		},
	},
	plugins: [require("flowbite/plugin")],
};
