import React from "react";
const DropDownNav = () => {
	return (
		<>	
			<div
				id="dropdownNavbar"
				class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
			>
				<ul
					class="py-2 text-sm text-gray-700 dark:text-gray-400"
					aria-labelledby="dropdownNavbarButton"
				>
					<li>
						<a
							href=""
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href=""
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href=""
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Earnings
						</a>
					</li>
				</ul>
				<div class="py-2">
					<a
						href=""
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
					>
						Sign out
					</a>
				</div>
			</div>
		</>
	);
};
export default DropDownNav;
