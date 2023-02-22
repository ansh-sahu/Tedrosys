import React, { useState } from 'react'
import '../Css/Login.css'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import back from '../img/Login/lo.jpg';
import { useGoogleLogin } from '@react-oauth/google'
import Mobile_number from './Mobile_number';

const Login = () => {
  const [option, setOption] = useState('')
  const responseGoogle = async (response) => {
    console.log(response)
    // if (response.credential) {
    //   axios.post(`${process.env.REACT_APP_ENDPOINT}/socialLogin1`, { Token_ID1: response.credential })
    //     .then(res => {
    //       fetch(`${process.env.REACT_APP_ENDPOINT}/sellerShop/get/${res.data.user._id}`,
    //         {
    //           method: 'GET',
    //           headers: {
    //             Authorization: `Bearer ${res.data.token}`
    //           }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //           if (res.data.user.role === 1 && data.shop) {
    //             const abl = {
    //               action: 'manipulate',
    //               subject: 'shop'
    //             }
    //             const data = { ...res.data.user, accessToken: res.data.token, ability: [abl] }
    //             dispatch(handleLogin(data))
    //             ability.update([abl]
    //             )
    //             history.push(getHomeRouteForLoggedInUser(data.role))
    //             toast.success(
    //               <ToastContent name={data.fullName || data.username || data.firstName || 'John Doe'} role={'admin' || data.role} />,
    //               { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
    //             )
    //           } else if (res.data.user.role === 0 && !data.shop) {
    //             const abl = {
    //               action: 'create',
    //               subject: 'shop'
    //             }

    //             const data = { ...res.data.user, accessToken: res.data.token, ability: [abl] }
    //             ability.update([abl])
    //             dispatch(handleLogin(data))
    //             history.push('/createShop')
    //           } else if (res.data.user.role === 0 && data.shop) {
    //             toast.info('Your Shop has been already created and is under verification, You will get a email when it is verified', 5000)

    //             const abl = {
    //               action: 'display',
    //               subject: 'shop'
    //             }

    //             const data = { ...res.data.user, accessToken: res.data.token, ability: [abl] }
    //             ability.update([abl])
    //             dispatch(handleLogin(data))
    //             history.push('/unApproved/Shops')
    //           } else {
    //             toast.error(
    //               <ToastError />, { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
    //             )

    //           }
    //         })
    //         .catch(err => alert(`An error occured - ${err}`))
    //     })
    //     .catch((err) => toast.error(
    //       <ToastError error={err} />, { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
    //     ))
    // }
  }

  const googlelogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: () => {
      console.log('Login Failed')
    }
  });

  return option === '' ? (
    <Wrapper>
      <div>
        <div className="bg-image" >  </div>
        <div className="bg-text">
          <NavLink to="/"><i className="fa-solid fa-square-xmark" /></NavLink>
          <div className="bt-button">
            <button onClick={() => setOption('number')}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 48 48" style={{ fill: '#000000' }}><path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z" /><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z" /></svg>Login with Mobile Number</button>
            <button onClick={() => googlelogin()}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 48 48" style={{ fill: '#000000' }}><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>Login with Google</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 48 48" style={{ fill: '#000000' }}><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z" /></svg>Login with Facebook</button>
          </div>
          <div className="create">
            <p>Create New <NavLink to="/newAccount">Account</NavLink> ?</p>
          </div>
        </div>

      </div>
    </Wrapper>
  ) : option === 'number' ? <Mobile_number setOption={setOption} /> : null
}

const Wrapper = styled.section`

.bg-image {
  /* The image used */
  background-image: url(${back});
  
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
    width: 40vh;
    height: 8vh;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #03C7C6;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
}
button:hover{
    background-color: green;
    font-size: 14px;
    cursor: pointer;

}
.bt-button{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
.fa-phone ,fa-google-plus{
color: #fff;
}
@media screen and (max-width: 700px){
    .bg-text{
        width: 90%;
        padding: 10px;
        font-size: 12px;
    } 
    }
    `;
export default Login
