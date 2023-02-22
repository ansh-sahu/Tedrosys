import React from 'react'
import styled from 'styled-components';
import '../Css/mob_notification.css';
import profile from "../img/Profile/pro.png";

const Wrapper = styled.section`
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
.mobile-view .first{
  display: flex;
  /* align-items: baseline; */
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  /* border: 1px solid; */
  height: 15vh;
}

.mobile-view .first .image{
width: 25%;
}
.mobile-view .first .image img{
width: 100%;
/* height: ; */
}
.mobile-view .second span{
font-size: 16px;
font-weight: 500;
}
.mobile-view .second p{
font-size: 14px;
line-height: 18px;
color: #919191;
}
.mobile-view .third{
/* border: 1px solid; */
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
}
.mobile-view .third p{
font-size: 10px;
margin: 0;
color:#03C7C6;
}
.mobile-view .third span{
border-radius: 100px;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
color: white;
background-color: #03C7C6;
}
.mobile-view hr{
margin: 0;

}

`;

const Mob_notification = () => {
  return (
<Wrapper>
  
{/* Mobile-View */}
<div className="mobile-view">
  {/* Header Section */}
  <header>
    <div className="head">
      <i className="fa-solid fa-bars" />
      <h4>Notificatons</h4>
      <i className="fa-regular fa-bell" />
    </div>
  </header>
  {/* Notification List Section */}
  <div className="first">
    <div className="image">
      <img src={profile } alt />
    </div>
    <div className="second">
      <span>Roger Hulg</span>
      <p>Hey,can i ask something? i need your help please</p>
    </div>
    <div className="third">
      <p>12min</p>
      <span>4</span>
    </div>
  </div>
  <hr />
  <div className="first">
    <div className="image">
      <img src={profile } alt />
    </div>
    <div className="second">
      <span>Roger Hulg</span>
      <p>Hey,can i ask something? i need your help please</p>
    </div>
    <div className="third">
      <p>Yesterday</p>
      {/* <span>4</span> */}
    </div>
  </div>
  <hr />
  <div className="first">
    <div className="image">
      <img src={profile } alt />
    </div>
    <div className="second">
      <span>Roger Hulg</span>
      <p>Hey,can i ask something? i need your help please</p>
    </div>
    <div className="third">
      <p>2 Week ago</p>
      <span>6</span>
    </div>
  </div>
  <hr />
  <div className="first">
    <div className="image">
      <img src={profile } alt />
    </div>
    <div className="second">
      <span>Roger Hulg</span>
      <p>Hey,can i ask something? i need your help please</p>
    </div>
    <div className="third">
      <p>12/02/21</p>
    </div>
  </div>
  <hr />
</div>

    </Wrapper>
  )
}

export default Mob_notification