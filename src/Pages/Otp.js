import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import '../Css/Otp.css'
import OtpContainer from './otp/OtpContainer';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';
import { toast } from 'react-toastify'

const Otp = ({ resendingOtp, resetTimer, verifyOtp, setVerifyOtp, timer, setTimer, disableInput, setDisableInput }) => {
  const [otp, setOtp] = useState('')
  const { handleLogin } = useUserContext()
  console.log(handleLogin)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/verify/${verifyOtp.userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          otp
        })
      })
      .then(async (response) => {
        if (response.ok) return response.json()
        else throw await response.json()
      })
      .then(result => {
        toast.success('Login Successfull', 2000)
        handleLogin({ user: result?.user, token: result?.token, _id: result?.user?._id })
        navigate(-1)

      })
      .catch(err => {
        toast.error(`An error occured - ${err.error || err.err || err}`, 2000)
      })
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total, minutes, seconds
    };
  }

  useEffect(() => {
    const deadline = new Date()
    deadline.setSeconds(deadline.getSeconds() + 2 * 60)

    const interval = setInterval(function () {
      let { total, minutes, seconds }
        = getTimeRemaining(deadline);

      if (total >= 0) {

        // update the timer
        // check if less than 10 then we need to 
        // add '0' at the beginning of the variable
        setTimer(
          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
        )
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [resetTimer])

  useEffect(() => {
    if (timer === '00:00') setDisableInput(true)
  }, [timer])

  const handleChange = (value) => {
    setOtp(value)
    // console.log("value insdie handle change", value);
  };

  return (
    <>
      <Wrapper>
        <div className="bg-image" />
        <div className="bg-text">
          <NavLink to="/"><i className="fa-solid fa-square-xmark" /></NavLink>
          <div className="bt-button">
            <div className style={{ height: '40%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Verify</h4>
              <p> <span> OTP is sent to 620xxxxx64.<a onClick={(e) => {
                e.preventDefault()
                setVerifyOtp({
                  state: false,
                  userId: null
                })
              }}><i className="fa-solid fa-pen-to-square" style={{ fontSize: 14 }} /></a></span> Please Enter it below </p>
              <OtpContainer handleChange={handleChange} otp={otp} disableInput={disableInput} />
            </div>
            <form onSubmit={handleSubmit}>
              <button type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Verify OTP</button>
            </form>
            <div style={{ color: 'black', fontSize: '0.5rem' }}>
              Otp Expires In : <span className="signin_ptag___1_12" {...(timer.split(':')[0] === '00' && timer.split(':')[1] < 10 && { style: { color: 'red' } })}> {timer}  </span></div>
            <div className="create" style={{ cursor: 'pointer' }}>
              <a onClick={(e) => {
                e.preventDefault()
                resendingOtp()
              }}>Re-Send OTP?</a>
            </div>
          </div>
        </div>
      </Wrapper>

    </>


  )
}
const Wrapper = styled.section`
body, html {
  height: 100%;
  margin: 0;
  font-family: 'poppins', sans-serif;
}

* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
}

.signin_ptag___1_12 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 0.03em;

  color: #232323;
  margin: 0.5rem 0;
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

.bt-text i{
    font-size: 26px;
    float: right;
}
 i:hover{
    /* background-color: #fff; */
    color: #03C7C6;
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
  height: 50vh;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  
}
button{
    width: 34vh;
    height: 8vh;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #03C7C6;
    border: 1px solid white;
    border-radius: 10px;
}
button:hover{
    background-color: green;
    font-size: 14px;
    cursor: pointer;

}
.bt-button{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90%;
}
a{
  color: #9d9d9d;
  text-decoration: none;
  font-size: 10px;
}
a:hover{
    color: green;
}
.fa-solid{
    font-size: 20px;
    float: right;
    color: rgb(88, 88, 88);
}
.fa-solid:hover{
    color: #03C7C6;
}
.create{
color: black;
cursor: pointer;
}
.create:hover {
  color: #03C7C6;
}
h4{
  color: black;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}
input{
  
  height: 6vh;
  border: 1px solid #03C7C6;
  border-radius: 6px;
}
p{
  color: black;
  font-size: 12px;
  width: 28vh;
  display: flex;
  flex-direction: column;
}
p i{
  font-size: 12px;
}
form input{
  display:inline-block;
  width:50px;
  height:50px;
  text-align:center;
}

@media screen and (max-width: 700px){
  .bg-text{
      width: 90%;
      padding: 10px;
  } 
  p{
    width: 32vh;
    line-height: 16px;
  }
  
  }
`;
export default Otp