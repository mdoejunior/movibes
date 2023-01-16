import React, {useEffect, useState} from "react";
import instance from "../../api/instance.js";
import {NavLink} from "react-router-dom";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TvSeries=()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        tvSeries();
    },[])

    const tvSeries=()=>{
        instance.get('tv/popular').then(res=>{
            setData(res.data.results.slice(0, 4));
        })
    }
    return(
        <>
            <div className='flex flex-row items-center justify-between'>
                <h3 className='mt-8 text-3xl font-bold text-white'>TV Series</h3>
                <h4 className='mt-8 font-bold text-lg  text-light-white'>See all</h4>
            </div>
            <div className='flex'>
                <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10'>
                    {data.map((trends, index)=>(
                        <div key={index} className='w-52 ml-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-8 relative'>
                            <NavLink to={`/tv-detail/${trends['id']}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${trends['poster_path']}`} alt='' className='w-full object-fit'/>
                            </NavLink>
                            <div className='flex flex-row items-center absolute gap-2 top-0 right-0 shadow-lg h-10 w-18 rounded-bl-3xl bg-light-white'>
                                <FontAwesomeIcon icon={faStar} className='text-gold' />
                                <span className='text-gold'>{trends['vote_average']}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TvSeries