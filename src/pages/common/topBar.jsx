import React from 'react'
import SearchBar from './searchBar'
const TopNavBar = ({showSearchBar = true}) => {
    return(
        <div className={`${!showSearchBar ? 'h-[4.5rem]' : ''} topbar flex flex-row justify-between items-center bg-blue-500`}>
          <div className='justify-start w-1/4'>
              <p className='pl-10 text-lg text-start font-bold text-white'>PaySchool</p>
          </div>
          <div className='justify-end w-3/4'>
             {showSearchBar?  <SearchBar /> : null}
          </div>
        </div>
    )
}
export default TopNavBar