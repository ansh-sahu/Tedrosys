import React, { useState } from "react";

// import "../Css/Home.css";
import logo from "../img/Logo/logo.png";
import { MdLocationOn } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../Context/languageContext";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import ProfilePic from '../img/Profile/pro.png'
import { FaUserAlt } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

const Nav = () => {
  const { lang, assignLanguage } = useLanguageContext();
  const [searchSwitch, setSearchSwitch] = useState(false)
  const [userPopUp, setUserPopUp] = useState(false)
  const router = useLocation()
  const { user } = useUserContext()

  console.log(user)

  const pages = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'About',
      to: '/about'
    },
    {
      name: 'Loans',
      to: '/loan'
    },
    {
      name: 'Category',
      to: '/category'
    },
    {
      name: 'Contact',
      to: '/contact'
    }
  ]

  return (
    <>
      {/*<div>*/}

      {/* <BussinessLoan/> */}
      {/* <Construction/> */}
      {/* <HomeLoan/> */}
      {/* <Mob_enquery/> */}
      {/* <Mob_notification/> */}
      {/* <Mobile_number/> */}
      {/* <NewAccount/> */}
      {/* <Otp/> */}
      {/* <PersionalLoan/> */}
      {/* <PrivacyPolicy/> */}
      {/* <Profile/> */}
      {/* <ReturnPolicy/> */}
      {/* <ShopUpload/> */}
      {/* <Thanku/> */}
      {/* </div> */}
      <Wrapper>
        <div className="desktop">
          {searchSwitch && <Search />}
          <nav className="navbar navbar-expand-lg bg-light" id="nav">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to={`/about`}>
                <img src={logo} alt />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="location">
                  <span>
                    <i className="faSharp faSolid faLocationDot" />
                    <MdLocationOn />
                    <select
                      name="select"
                      id="select"
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#03C7C6",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="BHOPAL">BHOPAL</option>
                      <option value="INDORE">INDORE</option>
                      <option value="UJJAIN">UJJAIN</option>
                      <option value="PUNE">PUNE</option>
                      <option value="PATNA">PATNA</option>
                    </select>
                  </span>
                </div>
                <ul className="navbar-nav">
                  {pages?.map((ele, index) => <li key={index} className="nav-item">
                    <NavLink
                      className={`nav-link ${router?.pathname === ele.to ? 'active' : ''}`}
                      aria-current="page"
                      to={ele.to}
                    >
                      {ele.name}
                    </NavLink>
                  </li>
                  )}
                </ul>
                <div className="sernot">
                  <span style={{ cursor: 'pointer' }} onClick={() => setSearchSwitch(!searchSwitch)}>
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                  {/* <input type="text"  name="search" > */}
                  <span style={{ cursor: 'pointer' }} >
                    <i className="fa-regular fa-bell" />
                  </span>
                </div>
                <div className="location">
                  <span>
                    <i className="faSharp faSolid faLocationDot" />
                    <BsGlobe2 />
                    <select
                      name="select"
                      id="select"
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#03C7C6",
                        background: "none",
                        cursor: "pointer",
                      }}
                      value={lang}
                      onChange={(e) => assignLanguage(e.target.value)}
                    >
                      <option value="en">ENGLISH</option>
                      <option value="hi">हिन्दी </option>
                      <option value="ben">বাংলা</option>
                      <option value="pa">ਪੰਜਾਬੀ</option>
                      <option value="guj">ગુજરાતી</option>
                    </select>
                  </span>
                </div>
                {!user ? <button className="login">
                  <NavLink to="/login" style={{ color: "#03C7C6" }}>
                    Login/Register
                  </NavLink>
                </button> : <div style={{ height: '100%', width: '4vw', cursor: 'pointer', position: 'relative' }} onMouseOver={() => setUserPopUp(true)} onMouseLeave={() => setUserPopUp(false)}>
                  {/* User PopUp */}
                  <div className="p-1">
                    <div className={`userPopUp bg-light border border-secondary ${userPopUp ? 'd-block' : 'd-none'}`}>
                      <div className="popUpItem d-flex gap-2 align-content-center cursor-pointer">
                        <span><FaUserAlt /></span>
                        <span>Profile</span>
                      </div>
                      <div className="popUpItem d-flex gap-2 align-content-center cursor-pointer">
                        <span><BiLogOut /></span>
                        <span>Logout</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: '100%', height: '70%' }}>
                    <img src={`${process.env.REACT_APP_URL}/${user?.picture}`} alt='User Profile Pic' onError={(e) => {
                      console.log(e)
                      e.onerror = null; // prevents looping
                      e.target.src = require('../img/Profile/pro.png')
                    }} style={{ width: '100%', height: '100%', objectFit: 'fill', paddingLeft: '0' }} />
                  </div>
                  <span style={{ display: 'inline-block', width: '100%', height: '30%', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '0.8rem', textAlign: 'center' }}>{user?.userName || 'User'}</span>
                </div>}
              </div>
            </div>
          </nav>
        </div>
      </Wrapper >
    </>
  );
};
const Wrapper = styled.section`
.desktop {
  position: relative;
}

  .userPopUp {
    position: absolute;
    top: 100%;
    left: -50%;
    z-index: 500;
    padding: 1rem;
    border-radius: 10px;
  }

  .popUpItem {
    border-bottom: 1px solid black;
    padding: 0.5rem
  }

  .popUpItem:hover {
    color:#0dcaf0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .desktop .container-fluid img {
    height: 12vh;
    padding-left: 30px;
  }
  .desktop #navbarNav ul li a {
    color: #03c7c6;
    font-size: 16px;
    font-weight: 200;
  }

  .desktop .active {
    color: #2649a4 !important ;
  }
  .desktop #nav {
    height: 11vh;
    border-radius: 0 0 30px 30px;
    border-bottom: 1px solid #b7b7b7;
  }
  .desktop .location {
    color: #03c7c6;
  }
  .desktop .location i {
    color: #03c7c6;
  }

  .desktop .login {
    font-size: 16px;
    border: 1px solid #03c7c6;
    color: #03c7c6;
    background: none;
    border-radius: 10px;
    width: 22vh;
    height: 30px;
  }
  .desktop .sernot {
    color: #03c7c6;
    display: flex;
    justify-content: space-around;
    width: 30vh;
  }

  .desktop .sernot input[type="text"] {
    width: 10px;
    /* box-sizing: border-box; */
    border: 2px solid #ccc;
    border-radius: 4px;
    /* font-size: 16px; */
    /* background-color: white; */
    /* background-image: url(searchicon.png); */
    /* background-position: 10px 10px; */
    background-repeat: no-repeat;
    /* padding: -1px 0px 0px 3px; */
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }
  .desktop .sernot input[type="text"]:focus {
    width: 100%;
  }
  .desktop .d-block w-100 {
    height: 474px;
  }
  .desktop #navbarNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export default Nav;
