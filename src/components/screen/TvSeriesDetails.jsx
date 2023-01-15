import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import instance from "../../api/instance.js";
import Categories from "../user-interfaces/Categories.jsx";
import Services from "../user-interfaces/Services.jsx";


const TvSeriesDetails=()=>{
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(()=>{
        tvDetails();
    },[])

    const tvDetails=()=>{
        instance.get(`tv/${id}`).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    return(
        <div className='flex flex-row justify-around'>
            <div className='flex'>
                <div className='gap-10'>
                    <div key={data.id} className='w-52 left-96 bg-white rounded-3xl overflow-hidden shadow-lg mt-8 relative'>
                        <img src={`https://image.tmdb.org/t/p/original/${data['poster_path']}`} alt='' className='w-full object-cover'/>
                        <div className='flex flex-row items-center absolute gap-2 top-0 right-0 shadow-lg h-10 w-18 rounded-bl-3xl bg-background'>
                            <img className="h-5"  src='../src/assets/star.png' alt='' />
                            <span className='text-white'>{data['vote_average']}</span>
                        </div>
                    </div>
                    <h3 className='text-2xl text-center text-bghover mt-10 left-20'>Title : {data['original_name']}</h3>
                    <h3 className='text-2xl text-center text-bghover mt-10 left-20'>Season : {data['number_of_seasons']}</h3>
                    <h3 className='text-2xl text-center text-bghover mt-10 left-20'>Episodes : {data['number_of_episodes']}</h3>
                    <h3 className='text-2xl text-center text-bghover mt-10 left-20'>Overview : {data['overview']}</h3>
                    <h3 className='text-2xl text-center text-bghover mt-10 left-20'>Status : {data['status']} USD</h3>
                </div>
            </div>
            <div>
                <Categories/>
                <Services/>
            </div>
        </div>
    )
}

export default TvSeriesDetails