import React,{useState,useEffect}  from 'react'
import Logo from "../img/Logo/logo.png"
import Loader from './Loader'

const LoadingPage = () => {
  return (
   <div className="container-fluid d-flex justify-content-center align-item-center w-100 h-100">
    <div className="row d-flex justify-content-center align-item-center">
    <img src={Logo} alt="" />
    <Loader/>
    </div>
   </div>
  )
}

export default LoadingPage;
