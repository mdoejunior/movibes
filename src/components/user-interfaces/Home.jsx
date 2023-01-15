import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faI, faPlay} from "@fortawesome/free-solid-svg-icons";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

import Trending from "./Trending.jsx";
import Upcoming from "./Upcoming.jsx";
import TvSeries from "./TvSeries.jsx";
import Popular from "./Popular.jsx";
import Categories from "./Categories.jsx";
import Services from "./Services.jsx";

const Home = ()=>{
    return(
        <div className='flex flex-row justify-around'>
            <div>
                <div className='bg-white rounded-3xl overflow-hidden shadow-lg mt-10 relative'>
                    <img src='./src/assets/moon.jpg' alt='' className='w-full h-72'/>
                    <div className='flex absolute gap-4 bottom-3 right-0'>
                        <button type="button" className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-button-color dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <FontAwesomeIcon icon={faPlay} className='text-2xl mr-3'/><span className='text-lg'>Play</span>
                        </button>
                        <button type="button"className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-button-color dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <FontAwesomeIcon icon={faInfo}  className='text-lg mr-3'/> <span className='text-lg'>More Info</span>
                        </button>
                    </div>
                </div>
                <Trending/>
                <Upcoming/>
                <TvSeries/>
                <Popular/>
            </div>
            <div>
                <Categories/>
                <Services/>
            </div>
        </div>
    )
}
export default Home