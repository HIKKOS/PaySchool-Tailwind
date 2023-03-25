import React from "react";
const CustomInput = ({
	handdleChange,
	value,
	type,
	placeholder,
	label,
	isRequired = true,
	disabled = false,
}) => {
	return (
		<>
			<label
				for="base-input"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			{isRequired ? (
				<input
					disabled={disabled}
					onChange={handdleChange}
					value={value}
					type={type}
					placeholder={placeholder}
					required
					id="base-input"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			) : (
				<input
					onChange={handdleChange}
					value={value}
					type={type}
					placeholder={placeholder}
					id="base-input"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			)}
		</>
	);
};
export default CustomInput;
