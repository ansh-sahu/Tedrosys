import React from 'react'
import styled from 'styled-components';
import '../Css/Thanku.css'
import image1 from "../img/Thanku/handshake-46.webp" ;
import image2 from "../img/Thanku/smile.png" 
import image3 from "../img/Thanku/thnq.png";
const Thanku = () => {
  return (
    <Wrapper>
  <div className='body'>
  <div className="left">
    <img src={image1}alt />
  </div>
  <div className="right">
    <img style={{height: '12vh'}} src={image2}alt />
    <img style={{height: '70vh'}} src={image3} alt />
    <button><a href="Home.html">Back To Home</a></button>
  </div>
</div>
</Wrapper>

  )
}
const Wrapper = styled.section`
.body{
    display: flex;
}
.left{
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right{
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button{
    background-color: #03C7C6;
    border: none;

    width: 50%;
    height: 8vh;
    border-radius: 14px;
    cursor: pointer;
} 
a{
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
}
button:hover{
    background-color:  rgba(19, 199, 3, 1);
    cursor: pointer;
}`;
export default Thanku