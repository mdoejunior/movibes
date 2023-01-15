import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import Trending from "../user-interfaces/Trending.jsx";
import Upcoming from "../user-interfaces/Upcoming.jsx";
import TvSeries from "../user-interfaces/TvSeries.jsx";
import Popular from "../user-interfaces/Popular.jsx";
import Categories from "../user-interfaces/Categories.jsx";
import Services from "../user-interfaces/Services.jsx";


const Movie = ()=>{
    return(
        <div className='flex flex-row justify-around'>
            <div>
                <Trending/>
                <Upcoming/>
                <Popular/>
            </div>
            <div>
                <Categories/>
                <Services/>
            </div>
        </div>
    )
}
export default Movie