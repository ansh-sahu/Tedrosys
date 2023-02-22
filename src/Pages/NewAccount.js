import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profile from "../img/Profile/Profile.png"
import "../Css/NewAccount.css";
import axios from "axios";


const NewAccount = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  console.log(userName,"user")
  console.log(email,"email")
  console.log(mobile,"mob")

const requestOptions=()=>{
  const userId = localStorage.getItem("id");
  axios({
    method:'post',
     url:`${process.env.REACT_APP_URL}/signup`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      userName,
      mobile,
      email,
      password,
    },
  })
  .then((response)=>{console.log(response.data)})
  .catch((error)=>{console.log(error)})
}
useEffect(() => {
}, []);
return (
    <Wrapper>
    <div>
      <div className="bg-image" />
      <div className="bg-text">
        <NavLink to="/">
          {" "}
          <i className="fa-solid fa-square-xmark" />
        </NavLink>
        <div className="bt-button">
          <h4>Create New Account</h4>
          <div className style={{ width: "100%" }}>
            <div className="imgs">
            <img
              id="imgFileUpload"
              alt="Select File"
              title="Select File"
              src={profile}
              style={{ cursor: "pointer", width: "20%" }}
            />
            </div>
            <span id="spnFilePath" />
            <input type="file" id="FileUpload1" style={{ display: "none" }} />
            <form action="/action_page.php">
              <label className="lab" htmlFor="fname">Full Name:</label>
              <input type="text" placeholder="Full Name" required value={userName} onChange={(e)=>setUserName(e.target.value)} />
              <label className="lab" htmlFor="email">Email I'd:</label>
              <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label className="lab" htmlFor="number">Moblie Number:</label>
              <input
                type="text"
                placeholder="Mobile Number"
                maxLength={10}
                required
                onChange={(e)=>setMobile(e.target.value)}
              />
               <label className="lab" htmlFor="number">Create Password:</label>
              <input
                type="password"
                placeholder="Creat Password"
                maxLength={10}
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
            </form>
          </div>
          <div className="create">
          <NavLink to="/otp" style={{ color: "#fff" }}>
            <button type="submit" style={{display:'flex', justifyContent:'center',alignItems:'center'}} onClick={requestOptions}>
                Register
            </button>
            </NavLink>
            <p>
              {" "}
              Already have in account!
              <a href="login.html" style={{ marginTop: 5 }}>
                Login!
              </a>
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  body,
  html {
    height: 100%;
    margin: 0;
    font-family: "poppins", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .lab{
    color:#5a5a5a;
    
  }
  .imgs{
    display: flex;
    justify-content: center;
  }
  .bg-image {
    /* The image used */
    background-image: url("./img/Login/lo.jpg");

    /* Add the blur effect */
    filter: blur(8px);
    -webkit-filter: blur(8px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bt-text i {
    font-size: 26px;
    float: right;
  }
  i:hover {
    /* background-color: #fff; */
    color: #03c7c6;
    cursor: pointer;
  }
  /* Position text in the middle of the page/image */
  .bg-text {
    /* background-color: rgb(0,0,0); Fallback color
    background-color: rgba(0,0,0, 0.4); Black w/opacity/see-through
   */
    background-color: #fff;
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 30%;
    height: 80vh;
    padding: 20px;
    // text-align: center;
    border-radius: 10px;
  }
  button {
    width: 34vh;
    height: 8vh;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #03c7c6;
    border: 1px solid white;
    border-radius: 10px;
  }
  button:hover {
    background-color: green;
    font-size: 14px;
    cursor: pointer;
  }
  .bt-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 92%;
  }
  a {
    color: #03c7c6;
    text-decoration: none;
    font-size: 15px;
  }
  a:hover {
    color: green;
  }
  .fa-solid {
    font-size: 20px;
    float: right;
    color: rgb(88, 88, 88);
  }
  .fa-solid:hover {
    color: #03c7c6;
  }
  .create {
    color: black;
    display: flex;
    flex-direction: column;
  }
  h4 {
    color: black;
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }
  input {
    width: 100%;
    height: 6vh;
    border: 1px solid #03c7c6;
    border-radius: 6px;
    padding: 10px;
  }
  p {
    color: black;
    font-size: 12px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    // align-items: center;
  }
`;

export default NewAccount;
