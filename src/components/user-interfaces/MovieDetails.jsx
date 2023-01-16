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
        <div className='container'>
            <div className='grid grid-cols-1'>
                <div className='gap-10'>
                        <div key={data.id} className='ml-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-8 relative'>
                                <img src={`https://image.tmdb.org/t/p/original/${data['poster_path']}`} alt='' className='w-full object-cover'/>
                        </div>
                       <h3 className='text-2xl text-center text-white mt-10 left-20'>{data['title']} . {data['release_date']}</h3>
                     {/* {data['genres'].map((genre,index)=>{*/}
                     {/*   return(*/}
                     {/*       <div  key={index}>*/}
                     {/*           <button type="button"*/}
                     {/*                   className="mt-10 w-15 h-15 rounded-2xl text-black bg-transparent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:focus:ring-gray-700 border dark:border-gray-700">*/}
                     {/*               <span className='text-white text-center'>{genre.name}</span>*/}
                     {/*           </button>*/}
                     {/*       </div>*/}
                     {/*   )*/}
                     {/*})}*/}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails