/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js","./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors:{
				'Primary': '#0e2a47',
				'Secondary': '#184a7e'
			}
		},
	},
	plugins: [require("flowbite/plugin")],
};
