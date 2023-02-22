import React from 'react';
import '../Css/Construction.css';
import companises from "../img/List of category/companises.png";
import construction from "../img/List of category/construction.png";
import education from "../img/List of category/education.png";
import technology from "../img/List of category/technology.png";
import shop from "../img/List of category/shop.png";
import transport from "../img/List of category/transport.png";
import Start from "../img/List of category/Start-up.png";
import other from "../img/List of category/other.png";
import arrow from "../img/icons/left arow.png";
import noRecord from "../img/List of category/no record ffound.png";
import styled from 'styled-components';


const Construction = () => {
  return (
   <Wrapper>
 <div className="category ">
  <div className="container text-center">
    <h3 className="service-type dheading ">Category</h3>
    <div className="row">
      <div className="col-sm-3">
        <div className="category-list">
          <table>
            <tbody><tr>
                <td> <img src={companises} alt /></td>
                <td> <a href="Company.html">Companies...</a> </td>
              </tr>
              <tr>
                <td> <img src={construction} alt /></td>
                <td><a href="Construction.html"> Construction...</a></td>
              </tr>
              <tr>
                <td> <img src={education} alt /></td>
                <td><a href="Education.html">Education...</a></td>
              </tr>
              <tr>
                <td> <img src={technology} alt /></td>
                <td><a href="Technologies.html">Technologies...</a></td>
              </tr>
              <tr>
                <td> <img src={shop} alt /></td>
                <td><a href="Shop&store.html">Shop &amp; Store...</a></td>
              </tr>
              <tr>
                <td> <img src={transport} alt /></td>
                <td><a href="Transport.html">Transport...</a></td>
              </tr>
              <tr>
                <td> <img src={Start} alt /></td>
                <td><a href="Startup.html">Start-up...</a></td>
              </tr>
              <tr>
                <td> <img src={other} alt /></td>
                <td><a href="other.html">Other...</a></td>
              </tr>
            </tbody></table>
          {/* Level 1: .col-sm-3 */}
        </div>
      </div>
      <div className="col-sm-9">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <img src={arrow} id="arrow" alt />
          <div className="submenu">
            <h4>Construction &amp; Real Estate Treade</h4>
            <div className="line" />
            <div className="records">
              <img src={noRecord} alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Wrapper>
  )
}
const Wrapper = styled.section`
.category{
  margin-top: 10px;
}

.category .col-sm-3{
  width: 25%;
}
.container{
  max-width: 95%;
}
.category-list{
  border: 1px solid rgba(232, 232, 232, 1);
  width: 100%;
  height: 80vh;
  background-color: #ffffff;
  border-radius: 5px 20px 20px 5px;
}
.category  img{
  width: 40px;
}
table{
 height: 80vh;
  width: 100%;
  font-size: 19px;
}
table tr td a{
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: black;
}

.service-type{
  color:#03C7C6 ;
  font-weight: 500;
  text-align: left;
}
.category .col-sm-9{
  width: 65%;
}
.dheading{
justify-content: left;
}

                          /* submenu section */
.submenu{
  width: 96%;
  height: 80vh;
  background: #fff;
  /* border: 1PX solid #B7B7B7; */
  border-radius: 20px;
  
  border-radius: 20px
}
.submenu h4{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
  padding-top: 10px;
  color: #03C7C6;
}
.submenu .line{
  width: 100%;
  height: 1px;
  background-color: #a6a6a626;
  border-radius: 5px;
}
.submenu .records img{
      height: 45vh;
      width: 70vh;
      margin-top: 12vh;
}
.row-cols-md-2 img{
  width: 20px;
  height: 20px;
  padding: 0px;
}
#arrow{

  margin-top: 97px;
}

`;
export default Construction
