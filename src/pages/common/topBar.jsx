import React from 'react'
import SearchBar from './searchBar'
const TopNavBar = () => {
    return(
        <div className='flex flex-row justify-center items-center bg-blue-500'>
            <p className='pl-10 text-lg text-center font-bold text-white'>PaySchool</p>
            <SearchBar />
        </div>
    )
}
export default TopNavBar