import React from "react";
import {FaRegBell, FaSearch, FaUserCircle} from "react-icons/fa";

const TopNavigation=()=>{
    return(
       <div className='flex flex-row items-center justify-around'>
           <div className='w-3/4 mr-20 h-16 flex items-center justify-start bg-dark dark:bg-light-white text-gray-500 rounded-full shadow-md
                 transition duration-300 ease-in-out'>
               <input className='w-full ml-5 font-sans text-2xl font-bold bg-transparent outline-none text-gray-500  placeholder-gray-500
                 pl-1 rounded' type='text' placeholder='Search for Movies , Tv Shows...' />
               <FaSearch size='18' className='text-secondary mr-8' />
           </div>
           <div className='flex text-gray-500 gap-x-14 mr-3 ml-4 transition duration-300 ease-in-out hover:text-pink-400
            cursor-pointer'>
               <BellIcon/>
               <UserCircle/>
           </div>
       </div>
    )
}

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;

export default TopNavigation