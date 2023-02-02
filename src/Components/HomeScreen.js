import React from 'react'
import Banner from './Banner'
import './homescreen.css'
import requests from './request'
import Navbar from './Navbar'

import Row from './Row'
const HomeScreen = () => {
  return (
    <div className="homescreen">
        <Navbar/>
        <Banner/>
        <Row
         title='Trending Now' 
         islargeRow
         url={requests.fetchTrending}
         
         />
         <Row
         title='Action' 
         url={requests.fetchComedy}
         
         />
         <Row
         title='Comedy' 
         url={requests.fetchAction}
         
         />
           <Row
         title='War' 
         url={requests.fetchWar}
         
         />
        
       
    </div>

    
  )
}

export default HomeScreen
