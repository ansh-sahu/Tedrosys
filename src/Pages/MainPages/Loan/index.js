import React from 'react'
import '../../../Css/LoanSection.css'
import LoanBanner from '../../../img/Loan/loan.gif'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import banner from "../../../img/Loan/Type of loan/homeloan.jpg";
import banner1 from "../../../img/Loan/Type of loan/bussiness.jpg";
import banner2 from "../../../img/Loan/Type of loan/personal.jpg";

const Loan = () => {
    return (
        <>
            <Wrapper>
                <div className="lol">
                    <img src={LoanBanner} alt width="100%" height="100%" />
                </div>
                <div className="btn">
                    <NavLink to="/persionalLoan"><button style={{ background: 'linear-gradient( to bottom, rgba(3, 199, 198, 1),rgba(19, 15, 38, 0.8))' }}>Personal Loan</button></NavLink>
                    <NavLink to="/HomeLoan"><button style={{ background: 'linear-gradient( to bottom, rgba(19, 199, 3, 1),rgba(19, 15, 38, 0.8))' }}>Home Loan</button></NavLink>
                    <NavLink to="/BussinessLoan"> <button style={{ background: 'linear-gradient( to bottom, rgba(255, 0, 0, 1),rgba(19, 15, 38, 0.8))' }}>Bussiness Loan</button></NavLink>
                </div>
                {/* Mobile-View Section */}
                <div className="mob-view">
                    {/* HEADER SECTION */}
                    <header>
                        <div className="head">
                            <a href="Home.html"><i className="fa-solid fa-chevron-left" /></a>
                            <span>Loan</span>
                        </div>
                    </header>
                    {/* Banner Slider */}
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={banner} className="d-block w-100" alt="..." style={{ width: '100%', height: '25vh', borderRadius: 10 }} />
                            </div>
                            <div className="carousel-item">
                                <img src={banner1} className="d-block w-100" alt="..." style={{ width: '100%', height: '25vh', borderRadius: 10 }} />
                            </div>
                            <div className="carousel-item">
                                <img src={banner2} className="d-block w-100" alt="..." style={{ width: '100%', height: '25vh', borderRadius: 10 }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev hvbutton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Loan Type Section */}
                    <div className style={{ height: '63vh', overflowY: 'scroll' }}>
                        <div className="Loan-btn">
                            <button>Home Loan</button>
                            <button>Bussiness Loan</button>
                            <button>Personal Loan</button>
                            <button>Car Loan</button>
                            <button>MSME Loan</button>
                            <button>Old Car Loan</button>
                            <button>Mudra Loan</button>
                            <button>PMEGP Loan</button>
                            <button>Loan Against Property</button>
                        </div>
                    </div>
                </div>





            </Wrapper>

        </>


    )
}

const Wrapper = styled.section`
lol{
  width: 100%;
  height: 62vh;
  z-index: -1;
  position: relative;
  /* background-image: url(loan.gif); */
}

/* .doo{
  width: 90%;
  background-color: #fff;
  height: 90%;
  border-radius: 20px;
 justify-content: space-between;
  display: flex;
  
  align-items: center;
  
} */
.btn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 12%;
  /* border: 1px solid; */
  height: 32vh;
  
}
.btn button{
  z-index: 999;
  color: #fff;
  width: 40vh;
  height: 8vh;
  font-size: 22px;
  font-weight: 700;
  border-radius: 14px;
  border: #fff;
  cursor: pointer;
}
button:hover{
  background-color: #1d9100;
  border: 1px solid rgb(255, 255, 255);
  cursor: pointer;
}


@media screen and (max-width: 700px) {

  .desktop{
    display: none;
  }
  .mob-view{
    display: block;
  }
  .mob-view header{
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    background-color: rgba(3, 199, 198, 1);
    color: white;
}
.mob-view .head{
width: 40%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 14px;
}
.mob-view .head span{
    font-size: 18px;
    font-weight: 500;
}
.mob-view .bg-image {
/* background-image: url(lo.jpg); */
width: 100%;
/* filter: blur(2px);
background-position: center;
background-repeat: no-repeat;
background-size: cover; */
}
.mob-view #carouselExampleControls{
padding: 10px;
border-radius: 10px;
}
.mob-view #carouselExampleControls button{
display: none;
}
.mob-view .Loan-btn{
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 72vh;
/* padding-top: 8px; */
}
.mob-view .Loan-btn button{
width: 35vh;
font-weight: 500;
border: none;
border-radius: 6px;
height: 35px;
background-color: turquoise;
color: white;

}
.mob-view .Loan-btn button:hover{
background-color: limegreen;
}
  }
`;

export default Loan
