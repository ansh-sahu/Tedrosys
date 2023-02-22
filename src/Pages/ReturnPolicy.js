import React from 'react'
import styled from 'styled-components'
import '../Css/ReturnPolicy.css'
const ReturnPolicy = () => {
  return (
    <Wrapper>
    <div className="lols">
  <div className="doo">
    <div className style={{width: '98%'}}>
      <h4>Return Policy</h4>
    </div>
    <div className="line" />
    <div className="Return-Policy">
      {/* <span >Return Policy</span> */}
      <div className="Return-Policy-p">
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</Wrapper>
  )
}
const Wrapper = styled.section`

.lols{
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
::-webkit-scrollbar { display: none; }
.doo{
  width: 90%;
  background-color: #fff;
  height: 90%;
  border-radius: 20px;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll; 
}
.lols .doo h4{
 float: left;
  font-size: 30px;
  padding-top: 10px;
  color: #03C7C6;
  font-weight: 600;
}
.line{
  width: 100%;
  height: 1px;
  background-color: #a6a6a626;
  border-radius: 5px;
}
.Return-Policy{
width: 90%;
}
.Return-Policy span{
font-size: 35px;
font-weight: 700;
}
.Return-Policy-p{
  width: 96%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.Return-Policy .Return-Policy-p p{
  width: 95%;
  margin-bottom: 0px;
  
}

`;
export default ReturnPolicy