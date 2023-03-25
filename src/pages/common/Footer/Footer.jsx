import React from "react";
const Footer = () => {
	//fixed bottom-0 left-0 z-20
	return (
		<>
			<footer class=" w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
				<span class="flex flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">				
					<a href="" class="hover:underline">
						PaySchool {new Date().getFullYear()}
					</a>					
				</span>
				<ul class="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">					
					<li>
						<a href="" class="hover:underline">
							Contacto
						</a>
					</li>
					
				</ul>
			</footer>
		</>
	);
};
export default Footer;
