import React from 'react'
import styled from 'styled-components'
import '../Css/Profile.css'
import profile from "../img/Profile/user.jpg"
const Profile = () => {
  return (
   <Wrapper>
    <div>
  {/*Profile   Section */}
  <div className style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20}}>
    <div className="lol">
      <h2>Profile</h2>
      <div className="container">
        {/* <div class="left"> */}
        {/* <img src="./user.jpg" alt=""> */}
        <div className="left">
          {/* <label for="fname">Upload Banner</label> */}
          <img id="imgFileUpload" alt="Select File" title="Select File" src={profile} style={{cursor: 'pointer'}} />
          <span id="spnFilePath" />
          <input type="file" id="FileUpload1" style={{display: 'none'}} />
        </div>
        {/* </div> */}
        <div className="right">
          <div className="Update">
            <label htmlFor="fname">Change Your Name</label>
            <input type="text" placeholder="Abhishek Soni" />
          </div>
          <div className="Update">
            <label htmlFor="fname">Change Mobile Number</label>
            <input type="text" placeholder={9876543210} minLength={10} maxLength={10} />
          </div>
          <div className="Update">
            <label htmlFor="fname">Change Email-Id</label>
            <input type="email" placeholder="abc123@gmail.com" />
          </div>
        </div>
      </div>
      <button type="submit" id="
  submit"> <a href="Home.html" style={{color: '#fff'}}>Update</a></button>
    </div>
  </div>
  {/* Footer section */}

  {/* Mobile-View Section */}
  <div className="mob-view">
    {/* HEADER SECTION */}
    <header>
      <div className="head">
        <i className="fa-solid fa-chevron-left" />
        <h4>Profile</h4>
      </div>
    </header>
    <div className="bod">
      <div className="left">
        {/* <label for="fname">Upload Banner</label> */}
        <img id="imgFileUpload" alt="Select File" title="Select File" src={profile} style={{cursor: 'pointer'}} />
        <span id="spnFilePath" />
        <input type="file" id="FileUpload1" style={{display: 'none'}} />
        <h4>Adom Shafi</h4>
        <span>Edit Profile</span>
      </div>
      <div className="right">
        <div className="Update">
          <label htmlFor="fname">Change Your Name</label>
          <input type="text" placeholder="Abhishek Soni" />
        </div>
        <div className="Update">
          <label htmlFor="fname">Change Mobile Number</label>
          <input type="text" placeholder={9876543210} minLength={10} maxLength={10} />
        </div>
        <div className="Update">
          <label htmlFor="fname">Change Email-Id</label>
          <input type="email" placeholder="abc123@gmail.com" />
        </div>
      </div>
      <button type="submit" id="
  submit" style={{display:'flex',justifyContent:'center'}}> <a href="Home.html" style={{color: '#fff'}}>Update</a></button>
    </div>
  </div>
</div>
</Wrapper>

    
  )
}
const Wrapper = styled.section`
.lol{
  width: 100%;
  height: 62vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
}
.lol h2{
  font-weight: 600;
  color: #2eafaf;
  text-decoration: underline;
  margin: 0;
}
.lol .container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lol .container .left{
  display: flex;
  justify-content:center ;
  align-items: center;
  width: 50%;
}
input{
  width: 100%;
}
.lol .container .left img{
  width: 40%;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
.lol .container .right{
  
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 36vh;
  
  justify-content: space-evenly;
}
.lol .container .right .Update{
  display: flex;
  flex-direction: column;
}

.lol .container .right .Update label{
  
  color: rgb(63, 63, 63);
  font-size: 18px;

}
.lol .container .right .Update input{
  border-radius: 8px;
  padding: 8px;
  border: none;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
.lol button{
  width: 20%;
  background-color:  #2eafaf;
  font-size: 16px;
  border: none;
  height: 6vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media screen and (max-width: 700px){
  body{
      background-color: #fff;
  }
  .desktop{
      display: none;
  }
  .mob-view{
      display: block;
  }
  .mob-view header{
      width: 100%;
      height: 8vh;
      display: flex;
      align-items: center;
      
  }
  .mob-view .head{
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 14px;
  }
  .mob-view .head h4{
      font-size: 18px;
      font-weight: 500;
      margin: 0;
  }
  .mob-view .bod{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 90vh;
  }

  .mob-view .bod .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 35vh;
      /* border: 1px solid; */
      padding-top: 30px;
  }

  .mob-view .bod .left h4{
      margin: 0;
      font-weight: 500;
      /* padding-top: 1px; */
  }
  .mob-view .bod .left span{
      font-size: 12px;
      font-weight: 500;
      margin-top: -22px;
      color: rgb(0, 87, 185);
  }
  .mob-view .bod .left img{
      width: 40%;
      border-radius: 20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
  }
  .mob-view .bod .right{
  
      width: 80%;
      display: flex;
      flex-direction: column;
      height: 46vh;
      
      justify-content: space-evenly;
  }
  .mob-view .bod .right .Update{
      display: flex;
      flex-direction: column;
  }
  
  .mob-view .bod .right .Update label{
      
      color: rgb(63, 63, 63);
      font-size: 18px;
  
  }
  .mob-view .bod .right .Update input{
      border-radius: 8px;
      padding: 4px;
      border: none;
      font-size: 14px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  .mob-view button{
      width: 50%;
      background-color:  #2eafaf;
      font-size: 16px;
      border: none;
      height: 6vh;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  }
`;
export default Profile