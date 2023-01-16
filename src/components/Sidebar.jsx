import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faHome, faVideoCamera, faTv, faCalendar} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [index, setIndex] = useState(0)
    return (
        <div className='fixed top-0 left-2 '>
            <div className={`dark:bg-light-white rounded-tr-3xl rounded-br-3xl w-56 h-screen p-5 pt-8 duration-300`}>
                <div className="flex gap-x-4 items-center">
                    <h1
                        className={`text-white origin-left m-1 text-hover-color font-medium text-3xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        MOVIBES
                    </h1>
                </div>
                <ul className="pt-6 mt-6">
                    <li
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-hover-color text-gray-300 text-sm items-center gap-x-4 mt-14
                              ${
                            index === 0 && "bg-bghover rounded-1xl "
                        } `}
                    >
                        <FontAwesomeIcon icon={faHome} className='text-lg text-gray-400' />
                        <NavLink to='/'>
                               <span className={`${!open && "hidden"} origin-left text-light-white font-semibold text-2xl duration-200`}>
                                   Home
                              </span>
                        </NavLink>

                    </li>
                    <li
                        onClick={() => setIndex(1)}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-hover-color text-gray-300 text-sm items-center gap-x-4 mt-14
                              ${
                            index === 1 && "bg-bghover rounded-1xl "
                        } `}
                    >
                        <FontAwesomeIcon icon={faVideoCamera} className='text-lg text-gray-400' />
                        <NavLink to='/movies'>
                               <span className={`${!open && "hidden"} origin-left text-light-white font-semibold text-2xl duration-200`}>
                                   Movies
                           </span>
                        </NavLink>

                    </li>
                    <li
                        onClick={() => setIndex(2)}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-hover-color text-gray-300 text-sm items-center gap-x-4 mt-14
                              ${
                            index === 2 && "bg-bghover rounded-1xl"
                        } `}
                    >
                        <FontAwesomeIcon icon={faTv} className='text-lg text-gray-400' />
                        <NavLink to='/'>
                               <span className={`${!open && "hidden"} origin-left text-light-white font-semibold text-2xl duration-200`}>
                                   Tv Series
                           </span>
                        </NavLink>

                    </li>
                    <li
                        onClick={() => setIndex(3)}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-hover-color text-gray-300 text-sm items-center gap-x-4 mt-14
                              ${
                            index === 3 && "bg-bghover rounded-1xl"
                        } `}
                    >
                        <FontAwesomeIcon icon={faCalendar} className='text-lg text-gray-400' />
                        <NavLink to='/'>
                               <span className={`${!open && "hidden"} origin-left text-light-white font-semibold text-2xl duration-200`}>
                                   Upcoming
                           </span>
                        </NavLink>

                    </li>

                </ul>
                <div>
                    <div className='w-44 h-48 rounded-3xl shadow-lg bg-black mt-14 relative'>
                        <button className='w-24 h-24 rounded-full bg-hover-color absolute -top-10 left-4 ml-5'>
                            <FontAwesomeIcon className='text-3xl' icon={faCheckCircle}/>
                        </button>
                        <h3 className='text-lg mr-3 ml-3 mt-10 text-white text-center text-justify absolute top-12'>play
                            movie quizes and earn free tickets</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
