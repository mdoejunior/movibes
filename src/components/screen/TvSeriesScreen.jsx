import React from "react";
import Sidebar from "../Sidebar.jsx";
import TopNavigation from "../TopNavigation.jsx";
import TvSeriesDetails from "./TvSeriesDetails.jsx";

const TvSeriesScreen=()=>{
    return(
        <div className='md:container md:mx-auto flex bg-black'>
            <div className='ml-52'>
                <Sidebar/>
            </div>
            <div className="flex-1 p-7">
                <TopNavigation/>
                <TvSeriesDetails/>
            </div>
        </div>
    )
}

export default TvSeriesScreen