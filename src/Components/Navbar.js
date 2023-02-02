import { alertTitleClasses } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react'
import './appbar.css'
const Navbar = () => {
    const[show,setShow]=useState(false);
    const handleShow=()=>{
         if(window.scrollY>100){
             setShow(true)
         }

         else{
             setShow(false)
         }
    }
    useEffect(()=>{
          window.addEventListener('scroll',handleShow)
    },[])
  return (
    <div className={`nav ${ show&&"nav_black"}`}>
        <div className="logo">
             <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png'/>
        </div>
        <div className="avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commonf"/>
}

export default Navbar
