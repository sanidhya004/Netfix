import React, { useEffect, useState } from 'react'
import './row.css'
import requests from './request'
import axios from './axios'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
const Row = ({title , islargeRow=false, url}) => {
    var row= true
    const base_url='https://image.tmdb.org/t/p/original/'
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
             const request= await axios.get(url)
             setMovie(request.data.results)
             return request;
        }
        fetchData()
    },[])
    const handlemovie=()=>{
         return movie.map((movie)=>{
             return(
                <img className={`row_poster ${islargeRow && 'row_posterLarge'}`}
                 src={`${base_url}${ islargeRow ? movie.poster_path:movie.backdrop_path}`}/>
             )
         })
    }
  return (
   <div className="row">
     <h2>{title}</h2>
     <div className="row_posters">
     { handlemovie()}
     </div>
     
   </div>
  )
}

export default Row
