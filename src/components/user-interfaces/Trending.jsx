import React, {useEffect, useState} from "react";
import instance from "../../api/instance.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faRankingStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
const Trending=()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
       trendingMovies();
    },[])

    const trendingMovies=()=>{
        instance.get('movie/now_playing').then(res=>{
            console.log(res.data.results)
            setData(res.data.results.slice(0, 4));
        })
    }
    return(
        <>
            <div className='flex flex-row items-center justify-between'>
                <h3 className='mt-8 text-3xl font-bold text-white'>Trending</h3>
                <h4 className='mt-8 font-bold text-lg text-background'>See all</h4>
            </div>
            <div className='flex'>
                <div className='grid grid-cols-4 gap-10'>
                    {data.map((trends, index)=>(
                        <div key={index} className='w-52 h-76 ml-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-8 relative'>
                            <NavLink to={`/movies-detail/${trends['id']}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${trends['poster_path']}`} alt='' className='w-full object-fit'/>
                            </NavLink>
                            <div className='flex flex-row items-center absolute gap-2 top-0 right-0 shadow-lg h-10 w-18 rounded-bl-3xl bg-background'>
                                <img className="h-5"  src='../src/assets/star.png' alt='' />
                               <span className='text-white'>{trends['vote_average']}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Trending