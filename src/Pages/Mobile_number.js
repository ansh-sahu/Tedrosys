import React, { useState } from 'react'
import '../Css/mob_number.css';
import styled from 'styled-components';
import Otp from './Otp';
import { toast } from 'react-toastify'

const Mobile_number = ({ setOption }) => {
  const [verifyOtp, setVerifyOtp] = useState({
    state: false,
    userId: null
  })
  const [number, setNumber] = useState('')
  const [resetTimer, setResetTimer] = useState(1)
  const [timer, setTimer] = useState('02:00')
  const [disableInput, setDisableInput] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/sendotpi`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNo: number
        })
      })
      .then(async (response) => {
        if (response.ok) return response.json()
        else throw await response.json()
      })
      .then(result => {
        toast.success(`Otp Send to ${number} successfully`, 2000)
        setVerifyOtp({
          state: true,
          userId: result?.user?._id
        })
      })
      .catch(err => {
        toast.error(`An error occured - ${err.error || err.err || err}`, 2000)
      })
  };

  const resendingOtp = () => {
    fetch(`${process.env.REACT_APP_URL}/sendotpi`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNo: number
        })
      })
      .then(async (response) => {
        if (response.ok) return response.json()
        else throw await response.json()
      })
      .then(result => {
        toast.success(`Otp Re-Send to ${number} successfully`, 2000)
        setTimer('01:00')
        setDisableInput(false)
        setResetTimer(resetTimer + 1)
        setVerifyOtp({
          state: true,
          userId: result?.user?._id
        })
      })
      .catch(err => {
        toast.error(`An error occured - ${err.error || err.err || err}`, 2000)
      })
  };

  const handlingMobileNumber = (e) => {
    const { value } = e.target
    setNumber(() => isNaN(parseInt(value[value.length - 1])) ? value.length === 1 ? "" : value.slice(0, (value.length - 1)) : value)
  }

  return !verifyOtp.state && !verifyOtp.userId ? <Wrapper>
    <div className="bg-image" />
    <div className="bg-text">
      <span onClick={() => setOption('')}><i className="fa-solid fa-square-xmark" /></span>
      <div className="bt-button">
        <div className style={{ height: '40%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
          <h4>Hello!</h4>
          <p>Verify your number to unlock more features.</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input className='w-100' type="text" placeholder="Enter Mobile Number" id="phone_number" maxLength={10} minLength={10} required style={{ padding: 10 }} value={number} onChange={handlingMobileNumber} />
          <button type="submit" id="submit"> <i className="fas fa-paper-plane" /><a style={{ color: '#fff' }}> Request OTP </a></button>
        </form>
      </div>
    </div>
  </Wrapper>
    : <Otp resendingOtp={resendingOtp} resetTimer={resetTimer} verifyOtp={verifyOtp} setVerifyOtp={setVerifyOtp} timer={timer} setTimer={setTimer} disableInput={disableInput} setDisableInput={setDisableInput} />
}
const Wrapper = styled.section`
.form {
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
    height: 80%;
}
a{
    color: #03C7C6;
    text-decoration: none;
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
}
h4{
  color: black;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}
input{
  width: 60%;
  height: 6vh;
  border: 1px solid #03C7C6;
  border-radius: 6px;
}
p{
  color: black;
  font-size: 12px;

}
@media screen and (max-width: 700px){
  .bg-text{
      width: 90%;
      padding: 10px;
  } 
  
  }
`;
export default Mobile_number;