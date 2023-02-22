import React from 'react'
import logo from '../img/Logo/logo.png';
import icon1 from '../img/Social media/fACEBOOK.png';
import icon2 from '../img/Social media/youtube.png';
import icon3 from '../img/Social media/TIW.png';
import icon4 from '../img/Social media/GOOGLE.png'
import icon5 from '../img/Play & App Store/APP STORE.png'
import icon6 from '../img/Play & App Store/PLAYSTORE.png'
import styled from 'styled-components';
const Footer = () => {
  return (
  <Wrapper>
    <div className="desktop">
        <footer>
  <div className="row">
    <div className="col">
      <img src={logo} className="logo" alt />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis qui, eos alias aliquid eaque
        soluta facere. Culpa, praesentium? Temporibus.</p>
      <div className="social-media">
        <a href="#"><img src={icon1} alt style={{cursor: 'pointer'}} /></a>
        <a href="#"><img src={icon2} alt style={{cursor: 'pointer'}} /></a>
        <a href="#"><img src={icon3} alt style={{cursor: 'pointer'}} /></a>
        <a href="#"><img src={icon4} alt style={{cursor: 'pointer'}} /></a>
      </div>
    </div>
    <div className="col" style={{cursor: 'pointer'}}>
      <h3>Office</h3>
      <p>Arya nagar</p>
      <p>Chapra , Bihar</p>
      <p>Saran, 841301 ,INDIA</p>
      <p className="email-id">ankushtaras@gmail.com</p>
      <h4>7896541230</h4>
    </div>
    <div className="col">
      <h3>Links</h3>
      <ul>
        <li><a href="Home.html">Home</a></li>
        <li><a href="About.html">About</a></li>
        <li><a href="Return Policy.html">Return Policy</a></li>
        <li><a href="Privacy Policy.html">Privacy Policy</a></li>
        <li><a href="Term&condition.html">Term &amp; Conditions</a></li>
      </ul>
    </div>
    <div className="col" id="store">
      <div className>
        <a href="#"> <img src={icon5} alt /></a>
        <a href="#"><img src={icon6}alt /></a>
      </div>
      <button style={{display:'flex',justifyContent:'center',alignItems:'center'}}><a href="Shop upload.html"> Become a Patner</a></button>
    </div>
  </div>
</footer>
</div>
</Wrapper>
  )
}
const Wrapper = styled.section`
*{
  margin: 0;
  padding: 0;
  font-family: 'poppins' ,sans-serif;
  box-sizing: border-box;
}
.desktop body{
  background-color: #DADADA;
}
a{
  text-decoration: none;
  color: #fff;
}
.desktop .container-fluid img{
  height: 12vh;
  padding-left: 30px;
}
.desktop #navbarNav  ul li a{
color: #03C7C6;
font-size: 15px;
font-weight: 200;
}
.desktop #nav{
  height: 11vh;
  border-radius: 0 0 30px 30px;
  border-bottom:1px solid #B7B7B7;
}
.desktop .location{
  color: #03C7C6;
}
.desktop .location i{
  color: #03C7C6;
}
.desktop nav #Home{
  color:#2649A4 !important ;
}
.desktop .login{
  font-size: 16px;
  border: 1px solid #03C7C6;
  color: #03C7C6;
  background: none;
  border-radius: 10px;
  width: 22vh;
  height: 30px;
}
.desktop .sernot{
  color: #03C7C6;
  display: flex;
  justify-content: space-around;
  width: 30vh;
  }

.desktop .sernot input[type=text] {
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
.desktop .sernot  input[type=text]:focus {
width: 100%;
}
.desktop .d-block w-100{
  height: 474px;
}
.desktop #navbarNav{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.desktop .jhumar {
  display: flex;
  justify-content: space-around;
  height: 42px;
}
.desktop .carousel-item{
  height: 400px;
}
.desktop .carousel-item img{
  height: 400px;
}
.desktop .category{
  padding-top: 10px;
  /* background-image:  url("homeloan.jpg"); */
}
.desktop .service-type{
color: #03C7C6;
font-weight: 500;
text-align: left;
}
.desktop  .card-img-top{

  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 10px;
  height: 30vh;
  border-radius: 10px 10px 5px 5px;
}
.desktop .card{
  width: 22rem;
  height: 40vh;
  border-radius: 30px;
}
.desktop  .card-title{
  display: flex;
  justify-content: center;
}
.desktop .category-list{
border: 1px solid rgba(232, 232, 232, 1);
width: 84%;
height: auto;
background-color: #ffffff;
border-radius: 5px 20px 20px 5px;
}

.desktop .category .col-sm-3{
  width: 25%;
}
.desktop .category .col-sm-9{
  width: 65%;
} 
/* .desktop .category .service{
  display: inline;
  justify-content: space-around;
}
.desktop .category .list img{
  width: 30px;
}
.desktop .category .list a{
  text-decoration: none;
  font-size: medium;
  color: black;
  margin-left: 38px;
}
.desktop .category .list{
  display: flex;
  justify-content:flex-start;
  margin: 19px;
  align-content: center;
}
.desktop #trend{
  padding-left: 30px;
}
.desktop #popular{
  padding-left: 60px;
} */


/* product card slider css */


.desktop #product{
position: relative;  
  height: 58vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

}
.desktop #product h4{
  font: size 20px; 
  font-weight: 600;
}

.desktop .swiper{
  width: 100%;
}

.desktop .card{
  position: relative;
  background: #fff;
  border-radius: 20px;
  /* margin: 20px 0; */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.desktop #product .card::before{
  content: "";
  position: absolute;
  height: 40%;
  width: 100%;
  background: #03C7C6;
  border-radius: 20px 20px 0 0;
}

.desktop .card .card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  z-index: 100;
}

.desktop  #product .card .image{
  height: 140px;
  width: 140px;
  border-radius: 50%;
  padding: 3px;
  background: #03C7C6;
}

.desktop #product .card .image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

.desktop .card .media-icons{
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desktop .card .media-icons i{
  color: #fff;
  opacity: 0.6;
  margin-top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.desktop  .card .media-icons i:hover{
  opacity: 1;
}

.desktop .card .name-profession{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  
} 

.desktop .name-profession .name{
  font-size: 20px;
  font-weight: 600;
}

.desktop .name-profession .profession{
  font-size:15px;
  font-weight: 500;
}

.desktop .card .rating{
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.desktop .card .rating i{
  font-size: 18px;
  margin: 0 2px;
  color: #03C7C6;
}

.desktop .card .button{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.desktop .card .button button{
  background: #03C7C6;
  outline: none;
  border: none;
  color: #fff;
  padding: 8px 22px;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
}


.desktop .swiper-pagination{
  position: absolute;
}

.desktop .swiper-pagination-bullet{
  height: 7px;
  width: 26px;
  border-radius: 25px;
  background: #03C7C6;
}

.desktop .swiper-button-next, .swiper-button-prev{
  opacity: 0.7;
  color: #03C7C6;
  transition: all 0.3s ease;
}
.desktop .swiper-button-next:hover, .swiper-button-prev:hover{
  opacity: 1;
  color: #03C7C6;
}
.desktop .credit a{
  text-decoration: none;
  color: #03C7C6;
  font-weight: 800;
}
.desktop .credit {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Footer section */
.desktop footer{
width: 100%;
/* position: absolute; */
bottom: 0;
background: linear-gradient( to bottom, rgba(19, 15, 38, 1),rgba(19, 15, 38, 0.8));
color: #ffff;
padding: 0px 30px 0px 30px;
border-top-left-radius: 125px;
font-size: 13px;
/* line-height: 4px; */
/* height: 53vh; */
border-radius: 50px 50px 0 0;
border-top: 5px solid #fff;
/* margin-top: -60px; */
/* overflow-y: auto; */


}
.desktop footer.row{
width: 85%;
margin: auto;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-between;

}
.desktop footer .col{
flex-basis: 25%;
padding: 10px;


}
.desktop footer .logo{
width: 20vh;
/* margin-bottom: 30px; */
}
.desktop footer .logo:hover{
  cursor: pointer;
}
.desktop footer .col h3{
width: fit-content;
margin-bottom: 40px;
position: relative;
}
.desktop footer .email-id{
width: fit-content;
border-bottom: 1px solid#ccc;
margin: 20px 0;

}
.desktop footer ul li{
list-style: none;
margin-bottom: 12px;
}
.desktop footer ul li a{
text-decoration: none;
color: #ffff;
}
.desktop footer form{
padding-bottom: 15px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid  #ccc;
margin-bottom: 50px;
}
.desktop footer form input{
width: 100%;
background: transparent;
color: #ccc;
border: 0;
outline: none;
}
.desktop .social-media{
display: flex;
justify-content: space-around;

}
.desktop .social-media image:hover{
  cursor: pointer;
}
.desktop #store{

padding-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
}
.desktop #store img{
width: 22vh;
}
.desktop #store img:hover{
  cursor: pointer;
}
.desktop #store button{
width: 70%;
height: 7vh;
font-size: 20px;
font-weight: 600;
color: #fff;
background-color: #2eafaf;
border: 1px solid #fff;
border-radius: 10px;
}


.mobile-view{
display: none;
}





 /* Mobile View CSS code */





@media screen and (max-width: 700px) {

.desktop{
  display: none;
}
.mobile-view{
  display: block;
}
.mobile-view  header{
  background-color: #03C7C6;
  height: 8vh;
}
.mobile-view .head{
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding-top: 8px;
}
.mobile-view  .input-group{
  padding: 10px;
}
.mobile-view  .form-control{
  width: 85%;
}
.mobile-view  .jhumar{
  display: flex;
  justify-content: space-around;
  height: 30px;
  margin-top: -10px;
}
.mobile-view  .service{
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}
.mobile-view .service a{
  color: black;
  
}
.mobile-view   .service .companies{
  /* border: 1px solid; */
  border-radius: 5px;
  width: 22%;

  height: 14vh;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.mobile-view  .service .companies img{
  width: 85%;
margin-top: -10px;
padding-left: 10px;

}
.mobile-view  .service .companies p{
 font-weight: 500;
 /* display: flex;
 justify-content: center;
 align-items: center ; */
  /* border: 1px solid black; */
  width: 100%;
  height:35px;
  padding-left: 5px;
}
.mobile-view  .one{
  /* position:absolute; */

  position: fixed;
top: 0%;

}
.mobile-view .height{
  margin-top: 136%;
/* z-index: 999; */
position: relative;
background: white;
}
.mobile-view  .second{
  /* background-color: #03c7c72f; */
  width: 100%;
  /* height: 80vh; */
  /* margin-top: -58vh; */
  /* position: absolute; */

}
.mobile-view   .container{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  margin-top: 30px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -5px 3px rgb(15 15 15 / 20%);
}
.mobile-view  .container .line{
  width: 30%;
  height: 3px;
  border-radius: 100px;
  background-color: rgb(175, 175, 175);
  margin-top: 10px;
}
.mobile-view  .shop{
  margin-top: 10px;
  display: flex;
  overflow-x: scroll;
  width: 100%;
}
.mobile-view .second .container .shop img{
width: 13vh;
border-radius: 10px;
box-shadow: rgb(17 17 26 / 10%) 0px 0px 16px;
padding: 2px;
height: 10vh;
}
.mobile-view .box{
width: 45%;
height: 16vh;
border-radius: 16px;
display: flex;
justify-content: space-evenly;
align-items: center;
}
.mobile-view .box span{
font-size: 20px;
font-family: Post No Bills Jaffna Light;
width: 14vh;
text-align: center;
line-height: 20px;
}
.mobile-view .box img{
width: 30%;
}
.mobile-view .product{
/* display: flex; */
/* overflow: hidden; */
display: inline-flex;
padding: 10px;
  /* overflow-x: scroll; */
}
.mobile-view .third{
overflow-x: scroll;
}
.mobile-view .card{
width: 12vh;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 5px;
}
.mobile-view .card span{
font-size: 10px;

}
.mobile-view .third.card img{
height: 10vh;
background-color: #FBD69E;

}
.mobile-view .video{
display: flex;
justify-content: center;
align-items: center;
border-radius: 16px;
margin-bottom: 10px;
}
.mobile-view .video video{
border-radius: 12px;
}
}




/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {

/* .desktop{
  display: none;
}
.mobile-view{
  display: block;
} */
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.example {background: green;}
}
`;
export default Footer
