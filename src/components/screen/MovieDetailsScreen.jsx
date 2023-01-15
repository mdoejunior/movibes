import React from "react";
import MovieDetails from "../user-interfaces/MovieDetails.jsx";
import Sidebar from "../Sidebar.jsx";
import TopNavigation from "../TopNavigation.jsx";
import Movie from "./Movie.jsx";

const MovieDetailsScreen=()=>{
    return(
        <div className='md:container md:mx-auto flex bg-black'>
            <div className='ml-52'>
                <Sidebar/>
            </div>
            <div className="flex-1 p-7">
                <TopNavigation/>
                <MovieDetails/>
            </div>
        </div>
    )
}

export default MovieDetailsScreen