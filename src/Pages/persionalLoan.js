import React from "react";
import styled from "styled-components";
import Herobanner from "../img/Loan/Type of loan/personal.jpg"
// import style from "../Css/persionalLoan.module.css";

import { BiPaperPlane } from "react-icons/bi";
const Wrapper = styled.section`

  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
    box-sizing: border-box;
  }
  .a {
    text-decoration: none;
    color: #fff;
  }
  /* body{
    background-color: #963b3b;
} */
  /* Navbar section */
  .container-fluid img {
    height: 12vh;
    padding-left: 30px;
  }
  #navbarNav ul li a {
    color: #03c7c6;
    font-size: 16px;
    font-weight: 200;
  }
  #nav {
    height: 11vh;
    border-radius: 0 0 30px 30px;
    border-bottom: 1px solid #b7b7b7;
    margin-bottom: -24px;
  }
  .location {
    color: #03c7c6;
  }
  .location i {
    color: #03c7c6;
  }
  .cate {
    color: #2649a4 !important;
  }
  .login {
    font-size: 16px;
    border: 1px solid #03c7c6;
    color: #03c7c6;
    background: none;
    border-radius: 10px;
    width: 18vh;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sernot {
    color: #03c7c6;
    display: flex;
    justify-content: space-around;
    width: 20vh;
  }
  .d-block w-100 {
    height: 474px;
  }
  #navbarNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .user {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .user img {
    height: 8vh;
  }

  /*Apply form  section */
  .hero {
    width: 100%;
    height: 92vh;
    background-image: url(${Herobanner});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }
  .hero h4 {
    color: white;
    font-weight: 600;
    background: linear-gradient(
      to bottom,
      rgba(3, 199, 198, 1),
      rgba(3, 199, 198, 0.6)
    );
    width: 40vh;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .form {
    width: 70%;
    height: 76vh;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    margin-bottom: 12px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  }
  form {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 76vh;
    margin-top: 15px;
  }
  .hero .input-tag h6 span {
    color: red;
  }
  .input-tag {
    margin-top: 5px;
    width:100%;
  }
  .flex-Input{
    display : flex;
    justify-content: space-between;
    width: 100%; 
  }
  .hero .input-tag input,
  textarea {
    width: 100%;
    height: 5vh;
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
  }
  .h3 {
    margin: 5px;
    justify-content: center;
    display: flex;
  }
  #myCheck {
    width: 5vh;
    height: 18px;
  }
  form .button {
    color: #fff;
    border: 0.7px solid #fff;
    width: 48%;
    height: 6vh;
    cursor: pointer;
    background: linear-gradient(
      to bottom,
      rgba(3, 199, 198, 1),
      rgba(3, 199, 198, 0.8)
    );
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 19px;
  }
  form .button:hover {
    color: #fff;
    background-color: rgb(1, 156, 1);
  }
`;
const persionalLoan = () => {
  return (
    <Wrapper>
    <div className="hero">
      <h4>Personal Loan</h4>
      <div className="form">
        <form action>
          <div className="input-tag">
            <h6>
              Loan Amount <span>*</span>
            </h6>
            <input
              type="number"
              placeholder="Enter Required Loan Amount"
              required
            />
          </div>
          <div className="input-tag">
            <h6>
              Tenre (Months)<span>*</span>
            </h6>
            <input type="text" placeholder="12 Months" required />
          </div>
          <div className="input-tag">
            <h6>
              Name<span>*</span>
            </h6>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div
            className="flex-Input"
          >
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Birth Date<span>*</span>
              </h6>
              <input type="text" placeholder="Birth Date" required />
            </div>
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Phone Number<span>*</span>
              </h6>
              <input type="number" placeholder="Phone Number" required />
            </div>
          </div>
          <div
            className="flex-Input"
          >
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Whatsapp Number<span>*</span>
              </h6>
              <input type="number" placeholder="Whatsapp Number" required />
            </div>
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Email I'd<span>*</span>
              </h6>
              <input type="email" placeholder="Email I'd" required />
            </div>
          </div>
          <div className="input-tag">
            <h6>
              PAN Card Number<span>*</span>
            </h6>
            <input type="text" placeholder="Enter PAN Card Number" required />
          </div>
          <div className="input-tag">
            <h6>
              Aadhar Card Number<span>*</span>
            </h6>
            <input
              type="number"
              placeholder="Enter Aadhar Card Number"
              required
            />
          </div>
          <div className="input-tag">
            <h6>
              Mother's Name<span>*</span>
            </h6>
            <input type="text" placeholder="Mother's Name" required />
          </div>
          <h3 className="h3">Residence Address</h3>
          <div className="input-tag">
            <h6>
              Province<span>*</span>
            </h6>
            <textarea
              id="address"
              rows={2}
              placeholder="Full Address"
              required
              style={{ height: "auto" }}
              defaultValue={""}
            />
          </div>
          <div
            className= "flex-Input"
          >
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Pincode<span>*</span>
              </h6>
              <input type="number" placeholder="Pincode" required />
            </div>
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                City<span>*</span>
              </h6>
              <input type="text" placeholder="Enter City" required />
            </div>
          </div>
          <div
            className='flex-Input'
          >
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                State<span>*</span>
              </h6>
              <input type="text" placeholder="Enter State" required />
            </div>
            <div className="input-tag" style={{ width: "45%" }}>
              <h6>
                Country<span>*</span>
              </h6>
              <input type="text" placeholder="Enter Country" required />
            </div>
          </div>
          <div className="input-tag">
            <h6>
              Landmark<span>*</span>
            </h6>
            <input type="text" placeholder="Enter Landmark" required />
          </div>
          <div className="input-tag">
            <h6>
              Select<span>*</span>
            </h6>
            <input type="text" placeholder="Select" required />
          </div>
          <p style={{ marginTop: 10 ,width:'100%',color:'white',height:"18px",display:'block',fontSize:'1rem'}}>
            <input type="checkbox" id="myCheck" onclick="myFunction()" />{" "}
            Residence address and Premanent address bhot are same?
          </p>
          {/* <label for="myCheck"></label>  */}
          <div id="Checkout" style={{ display: "block", marginTop: 10, width:'100%' }}>
            <h3 className="h3">Premanent Address</h3>
            <div className="input-tag">
              <h6>
                Province<span>*</span>
              </h6>
              <textarea
                id="address"
                rows={2}
                placeholder="Full Address"
                required
                style={{ height: "auto" }}
                defaultValue={""}
              />
            </div>
            <div
              className
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="input-tag" style={{ width: "45%" }}>
                <h6>
                  Pincode<span>*</span>
                </h6>
                <input type="number" placeholder="Pincode" required />
              </div>
              <div className="input-tag" style={{ width: "45%" }}>
                <h6>
                  City<span>*</span>
                </h6>
                <input type="text" placeholder="Enter City" required />
              </div>
            </div>
            <div
              className
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="input-tag" style={{ width: "45%" }}>
                <h6>
                  State<span>*</span>
                </h6>
                <input type="text" placeholder="Enter State" required />
              </div>
              <div className="input-tag" style={{ width: "45%" }}>
                <h6>
                  Country<span>*</span>
                </h6>
                <input type="text" placeholder="Enter Country" required />
              </div>
            </div>
            <div className="input-tag">
              <h6>
                Landmark<span>*</span>
              </h6>
              <input type="text" placeholder="Enter Landmark" required />
            </div>
            <div className="input-tag">
              <h6>
                Select<span>*</span>
              </h6>
              <input type="text" placeholder="Select" required />
            </div>
          </div>
          <div
            className="input-tag"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button" type="submit">
              {/* <i className="fas fa-paper-plane" /> */}
              <BiPaperPlane/>
              <a className="a" href="Thanku.html">
                SUBMIT
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
    </Wrapper>
  );
};

export default persionalLoan;
