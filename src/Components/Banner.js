import React, { useEffect,useState } from 'react'
import './banner.css'
import axios from './axios'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import requests from './request';
const Banner = () => {

   
         const[movie,setMovie]=useState([])
         useEffect(()=>{
              async function fetchData(){
                 const request= await axios.get(requests.fetchTrending);
                 setMovie(
                    request.data.results[
                        Math.floor(Math.random()*request.data.results.length-1)
                    ]
                 )

                 return request;
              }

              fetchData()
         },[])
         
         console.log(movie)
    
  
  return (
    <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className="banner_content">
        <div className="banner_title">{movie.original_title}</div>
        <div className="banner_buttons">
             <button><PlayArrowIcon/>Play</button>
             <button><AddIcon/>My list</button>

        </div>
        <div className="banner_description">
            {movie.overview}
        </div>
        </div>
        
    </header>
  )
}

export default Banner
