import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
	return (
		<>     
      <form class="mt-2 flex flex-wrap justify-between md:flex-row w-full">
        <div className="justify-center input-group relative items-stretch w-full mb-4">
          <input
            type="search"
            name="query"
            placeholder="Nombre"
            required="required"
            class="mr-4 w-6/12 h-12 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg xl:transition-all xl:duration-300  focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
          />
          <button className="bg-sky-500 px-5 rounded-lg" type="button">
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </form>
      
    </>
	);
};
export default SearchBar;
