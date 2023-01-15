import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";


const Categories = () => {
    return(
        <>
            <div className='flex text-white gap-x-14 mr-3 ml-4 mt-5'>
                <h3 className='text-lg text-white font-bold'>Categories</h3>
                <h5>Uncheck all</h5>
            </div>
            <div className='text-white w-full bg-light-white rounded-3xl overflow-hidden shadow-lg mt-8'>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-1' className='ml-2 relative'>Action
                        <input type='checkbox' id='checkbox-1' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl text-opacity-0 check-1 h-5 rounded w-5 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-2' className='ml-2 relative'>Adventure
                        <input type='checkbox' id='checkbox-2' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl h-5 text-opacity-0 check-1 rounded w-5 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-3' className='ml-2 relative'>Animated
                        <input type='checkbox' id='checkbox-3' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl text-opacity-0 check-1 h-5 rounded w-5 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-4' className='ml-2 relative'>Comedy
                        <input type='checkbox' id='checkbox-4' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl h-5 text-opacity-0 check-1 rounded w-5 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-5' className='ml-2 relative'>Crime
                        <input type='checkbox' id='checkbox-5' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl h-5 rounded text-opacity-0 check-1 w-5 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <div className='flex items-center m-3'>
                    <label htmlFor='checkbox-6' className='ml-2 relative'>Fantasy
                        <input type='checkbox' id='checkbox-6' className='appearance-none border-2'/>
                        <FontAwesomeIcon icon={faCheck} className='text-8xl h-5 rounded w-5 text-opacity-0 check-1 text-black bg-hover-color absolute left-44 top-2' />
                    </label>
                </div>
                <Divider/>
                <h3 className='text-center text-lg m-2 text-gray-600'>See more</h3>
            </div>
        </>
    )
}

const Divider = () => <hr className="ml-4 mr-9 bg-gray-600 dark:gray-600 border border-gray-600  dark:gray-600 rounded-full" />;
export default Categories