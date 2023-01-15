import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import instance from "../../api/instance.js";
import Trending from "./Trending.jsx";
import Upcoming from "./Upcoming.jsx";
import Popular from "./Popular.jsx";
import Categories from "./Categories.jsx";
import Services from "./Services.jsx";

const MovieDetails=()=>{
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(()=>{
        movieDetails();
    },[])

    const movieDetails=()=>{
        instance.get(`movie/${id}`).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    return(
        <div className='flex flex-row justify-around'>
            <div className='flex'>
                <div className='gap-10'>
                        <div key={data.id} className='w-52  ml-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-8 relative'>
                                <img src={`https://image.tmdb.org/t/p/original/${data['poster_path']}`} alt='' className='w-full object-cover'/>
                            <div className='flex flex-row items-center absolute gap-2 top-0 right-0 shadow-lg h-10 w-18 rounded-bl-3xl bg-background'>
                                <img className="h-5"  src='../src/assets/star.png' alt='' />
                                <span className='text-white'>{data['vote_average']}</span>
                            </div>
                        </div>
                       <h3 className='text-2xl text-center text-white mt-10 left-20'>Title : {data['title']}</h3>
                       <h3 className='text-2xl text-center text-white mt-10 left-20'>Budget : {data['budget']} USD</h3>
                </div>
            </div>
            <div>
                <Categories/>
                <Services/>
            </div>
        </div>
    )
}

export default MovieDetails