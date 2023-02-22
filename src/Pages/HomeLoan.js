import React from 'react'
import styled from 'styled-components';
import back from "../img/Loan/Type of loan/homeloan.jpg";
import '../Css/HomeLoan.css'
const HomeLoan = () => {
  return (
<Wrapper>
 <div className="heros" style={{background:`url(${back})`}} >
  <h4>Home Loan</h4>
  <div className="form">
    <form action className='forms'>
      <div className="input-tag">
        <h6>Loan Amount <span>*</span></h6>
        <input type="number" placeholder="Enter Required Loan Amount" required />
      </div>
      <div className="input-tag">
        <h6>Tenre (Months)<span>*</span></h6>
        <input type="text" placeholder="12 Months" required />
      </div>
      <div className="input-tag">
        <h6>Name<span>*</span></h6>
        <input type="text" placeholder="Full Name" required />
      </div>
      <div className='flex-input' >
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Birth Date<span>*</span></h6>
          <input type="text" placeholder="Birth Date" required />
        </div>
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Phone Number<span>*</span></h6>
          <input type="number" placeholder="Phone Number" required />
        </div>
      </div>
      <div className='flex-input'  >
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Whatsapp Number<span>*</span></h6>
          <input type="number" placeholder="Whatsapp Number" required />
        </div>
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Email I'd<span>*</span></h6>
          <input type="email" placeholder="Email I'd" required />
        </div>
      </div>
      <div className="input-tag">
        <h6>PAN Card Number<span>*</span></h6>
        <input type="text" placeholder="Enter PAN Card Number" required />
      </div>
      <div className="input-tag">
        <h6>Aadhar Card Number<span>*</span></h6>
        <input type="number" placeholder="Enter Aadhar Card Number" required />
      </div>
      <div className="input-tag">
        <h6>Mother's Name<span>*</span></h6>
        <input type="text" placeholder="Mother's Name" required />
      </div>
      <h3>Residence Address</h3>
      <div className="input-tag">
        <h6>Province<span>*</span></h6>
        <textarea className='textarea' id="address" rows={2} placeholder="Full Address" required style={{height: 'auto'}} defaultValue={""} />
      </div>
      <div className='flex-input'  >
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Pincode<span>*</span></h6>
          <input type="number" placeholder="Pincode" required />
        </div>
        <div className="input-tag" style={{width: '45%'}}>
          <h6>City<span>*</span></h6>
          <input type="text" placeholder="Enter City" required />
        </div>
      </div>
      <div className='flex-input'  >
        <div className="input-tag" style={{width: '45%'}}>
          <h6>State<span>*</span></h6>
          <input type="text" placeholder="Enter State" required />
        </div>
        <div className="input-tag" style={{width: '45%'}}>
          <h6>Country<span>*</span></h6>
          <input type="text" placeholder="Enter Country" required />
        </div>
      </div>
      <div className="input-tag">
        <h6>Landmark<span>*</span></h6>
        <input type="text" placeholder="Enter Landmark" required />
      </div>
      <div className="input-tag">
        <h6>Select<span>*</span></h6>
        <input type="text" placeholder="Select" required />
      </div>
      <p style={{marginTop: 10 ,marginTop: 10,  width: '100%', fontSize: '1rem', color: 'white'}}><input type="checkbox" id="myCheck" onclick="myFunction()" />  Residence address and Premanent address bhot are same?</p>
      {/* <label for="myCheck"></label>  */}
      <div id="Checkout" style={{display: 'block', marginTop: 10, width:"100%"}}>
        <h3>Premanent Address</h3>
        <div className="input-tag">
          <h6>Province<span>*</span></h6>
          <textarea className='textarea' id="address" rows={2} placeholder="Full Address" required style={{height: 'auto'}} defaultValue={""} />
        </div>
        <div className style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Pincode<span>*</span></h6>
            <input type="number" placeholder="Pincode" required />
          </div>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>City<span>*</span></h6>
            <input type="text" placeholder="Enter City" required />
          </div>
        </div>
        <div className style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>State<span>*</span></h6>
            <input type="text" placeholder="Enter State" required />
          </div>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Country<span>*</span></h6>
            <input type="text" placeholder="Enter Country" required />
          </div>
        </div>
        <div className="input-tag">
          <h6>Landmark<span>*</span></h6>
          <input type="text" placeholder="Enter Landmark" required />
        </div>
        <div className="input-tag">
          <h6>Select<span>*</span></h6>
          <input type="text" placeholder="Select" required />
        </div>
      </div>
      <div className="input-tag" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button type="submit"><i className="fas fa-paper-plane" /><a href="Thanku.html" className="sub">SUBMIT</a></button>
      </div>
    </form>
  </div>
</div>

</Wrapper>
  )
}
const Wrapper = styled.section`

.heros{
  width: 100%;
  height: 92vh;
 
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:end;

}
.heros h4{
  color: white;
  font-weight: 600;
  background: linear-gradient( to bottom, rgba(19, 199, 3, 1),rgba(19, 199, 3, 0.8));
  width: 40vh;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
 
}
::-webkit-scrollbar { display: none; }
.form{
  width: 70%;
  height: 77vh;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  margin-bottom: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll; 
}
.forms{
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:76vh;
  margin-top: 15px;
}
.heros .input-tag h6 span{
color: red;

}
.input-tag{
  margin-top: 5px;
  width: 100%;
}
.flex-input{
  width: 100%;
  display :flex;
   justify-content: space-between;
}
.heros .input-tag input,.textarea{
  width: 100%;
  height: 5vh;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 10px;
}
h3{
  margin: 5px;
  justify-content: center;
  display: flex;

}
#myCheck{
  width: 5vh;
  height: 18px;
  
}
form button{
  color: #fff;
  border: 0.7px solid #fff;
  width: 48%;
  height: 6vh;
  cursor: pointer;
  background: linear-gradient( to bottom, rgba(3, 199, 198, 1),rgba(3, 199, 198, 0.8));
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 19px;
}
form button:hover{
  color: #fff;
  background-color: rgb(1, 156, 1);
}




                                  /* Mobile view */

@media screen and (max-width: 700px) {

.desktop{
  display: none;
}
.mobile-view{
  display: block;
}
                                    .mob-view header{
          width: 100%;
          height: 8vh;
          display: flex;
          align-items: center;
          background-color: rgba(3, 199, 198, 1);
          color: white;
      }
      .mob-view .head{
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
      }
      .mob-view .head span{
          font-size: 18px;
          font-weight: 500;
      }
      .mob-view hr{
          margin: 0;
      }
      .mob-view form{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
      }
.mob-view form .from{
  width: 95%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
}
.mob-view form .from input ,.textarea ,select{
/* width: 100%; */
height: 42px;
font-size: 14px;
padding: 5px ;
border-radius: 5px;
border: 0.5px solid rgb(199, 199, 199);
} 
.mob-view form .from label{
  font-weight: 500;

}

.mob-view .point{
  width: 95%;
          height: 8vh;
          display: flex;
          justify-content: center;
          border-radius: 10px;
          align-items: center;
          background-color: rgba(3, 199, 198, 1);
          color: white;
}


.mob-view .btn{
  width: 40%;
  /* padding: 3px; */
  border: none;
  border-radius: 6px;
  height: 6vh;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color:cadetblue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.mob-view .btn:hover{
  background-color: rgb(118, 197, 0);
}
.mob-view .btn a{
  text-decoration: none;
  color: #fff;
}
}`;

export default HomeLoan;
