import React from 'react'
import styled from 'styled-components'
import logo from "../img/Logo/logo.png"
const ShopUpload = () => {
  return (
<Wrapper>
<div className='desktop'> 
  <div className="hero">
    <h4>Bussiness Details</h4>
    <div className="form">
      <form action>
        <div className="input-tag" style={{display: 'flex', justifyContent: 'space-between', width: '80%'}}>
          <h6>Bussiness Logo<span>*</span></h6>
          <img id="imgFileUpload" alt="Select File" title="Select File" src={logo} style={{cursor: 'pointer'}} />
          <span id="spnFilePath" />
          <input type="file" id="FileUpload1" style={{display: 'none'}} />
        </div>
        <div className="input-tag">
          <h6>Bussiness Name <span>*</span></h6>
          <input type="text" placeholder="Enter Your Bussiness Name" required />
        </div>
        <div className="input-tag">
          <h6>Bussiness Email<span>*</span></h6>
          <input type="email" placeholder="user123@gmail.com" required />
        </div>
        <div className="input-tag">
          <h6>GST Number<span>(Optional)</span></h6>
          <input type="text" placeholder="Enter GST Number" />
        </div>
        <div className="input-tag">
          <h6>Shop Owner Name<span>*</span></h6>
          <input type="text" placeholder="Shop Owner Name" required />
        </div>
        <div className style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Phone Number<span>*</span></h6>
            <input type="text" placeholder="Phone Number" maxLength={10} required />
          </div>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Whatsapp Number<span>*</span></h6>
            <input type="text" placeholder="Whatsapp Number" maxLength={10} required />
          </div>
        </div>
        <div className style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Shop Open Timing<span>*</span></h6>
            <input type="time" placeholder="08:30am" required />
          </div>
          <div className="input-tag" style={{width: '45%'}}>
            <h6>Shop Close Timing<span>*</span></h6>
            <input type="time" placeholder="09:00pm" required />
          </div>
        </div>
        <div className="input-tag" style={{width: '100%'}}>
          <h6>Bussiness Service<span>*</span></h6>
          <input type="text" placeholder="Enter your Services" required />
        </div>
        <div className="input-tag">
          <h6>About your Bussiness<span>*</span></h6>
          <textarea id="address" rows={2} placeholder="About your Bussiness" required style={{height: 'auto'}} defaultValue={""} />
        </div>
        <div className="input-tag">
          <h6>Province<span>*</span></h6>
          <textarea id="address" rows={2} placeholder="Full Address" required style={{height: 'auto'}} defaultValue={""} />
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
          <h6>PAN Card Number<span>(Optional)</span></h6>
          <input type="text" placeholder="Enter PAN Card Number" required />
        </div>
        <div className="input-tag">
          <h6>Aadhar Card Number<span>*</span></h6>
          <input type="number" placeholder="Enter Aadhar Card Number" required />
        </div>
        <div className="input-tag">
          <h6>Select Service Type <span>*</span></h6>
          <select name="Select" aria-placeholder="Select" id="Service" style={{padding: 6}}>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Service_Provider">Service Provider</option>
            <option value="PatnerShip">PatnerShip</option>
            <option value="Recruitment">Recruitment</option>
          </select>
        </div>
        <div className="input-tag">
          <h6>Select Main Category<span>*</span></h6>
          <select name="Select" aria-placeholder="Select" id="Service" style={{padding: 6}}>
            <option value="Companies">Companies</option>
            <option value="Construction">Construction</option>
            <option value="Technology">Technology</option>
            <option value="Start-up">Start-up</option>
            <option value="Shop & Store">Shop &amp; Store</option>
            <option value="Transport">Transport</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-tag">
          <h6>Select Sub Category<span>*</span></h6>
          <select name="Select" aria-placeholder="Select" id="Service" style={{padding: 6}}>
            <option value="Sub Category">Sub Category 1</option>
            <option value="Sub Category">Sub Category 2</option>
          </select>
        </div>
        <div className="input-tag">
          <h6>Upload Shop Images &amp; Banner<span>*</span></h6>
          <div id="img-upload-form" method="post" encType="multipart/form-data">
            <p>
              {/* <label for="upload_imgs" class="button hollow">Select Your Images +</label> */}
              <input className="show-for-sr" style={{padding: 0, border: 'none'}} type="file" id="upload_imgs" name="upload_imgs[]" multiple />
            </p>
            <div className="quote-imgs-thumbs quote-imgs-thumbs--hidden" id="img_preview" aria-live="polite" />
            <p>
              <input className="button large expanded" type="submit" name="submit" defaultValue="Upload Images" style={{width: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '7vh', background: 'green'}} />
            </p>
          </div>
        </div>
        <div className="input-tag" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <a href="Home.html" style={{width: '36vh'}}><button type="Upload"><i className="fas fa-paper-plane" />SUBMIT</button></a>
        </div>
      </form>
    </div>
  </div>


  {/* Mobile view section */}
  <div className="mob-view">
    {/* HEADER SECTION */}
    <header>
      <div className="head">
        <i className="fa-solid fa-chevron-left" />
        <span>Create Bussiness</span>
      </div>
    </header>
    <hr />
    <form className>
      <div className="from">
        <label htmlFor="fname">Upload Bussiness Logo</label>
        <img id="imgFileUpload" alt="Select File" title="Select File" src="./img/Profile/Profile.png" style={{cursor: 'pointer', width: '30%', border: '1px dashed', borderRadius: 5, padding: 4}} />
        <span id="spnFilePath" />
        <input type="file" id="FileUpload1" style={{display: 'none'}} />
      </div>
      {/* Loan Form Section */}
      <div className="from">
        <label htmlFor="fname">Bussiness Name</label>
        <input type="text" placeholder="Dona_machine" required />
      </div>
      <div className="from">
        <label htmlFor="fname">Bussiness Email-Id</label>
        <input type="email" placeholder="abhi123@gmail.com" required />
      </div>
      <div className="from">
        <label htmlFor="fname">Contact Number</label>
        <input type="text" minLength={10} maxLength={10} placeholder={9876543210} required />
      </div>
      <div className="from">
        <label htmlFor="fname">WhatsApp Number</label>
        <input type="text" placeholder={9876543210} maxLength={10} minLength={10} />
      </div>
      <div className="from">
        <label htmlFor="fname">First Name</label>
        <input type="text" placeholder="Enter First Name" />
      </div>
      <div className="from">
        <label htmlFor="fname">Middle Name</label>
        <input type="text" placeholder="Enter Middle Name" />
      </div>
      <div className="from">
        <label htmlFor="fname">Last Name</label>
        <input type="text" placeholder="Enter Last Name" />
      </div>
      <div className="from">
        <label htmlFor="fname">Personal Email-Id </label>
        <input type="email" placeholder="abc123@gmail.com " />
      </div>
      <div className="from">
        <label htmlFor="fname">PAN Number</label>
        <input type="text" placeholder="A2S56C31C" />
      </div>
      <div className="from">
        <label htmlFor="fname">Aadhar Number</label>
        <input type="text" placeholder="XXXX-XXXX-XXXX" maxLength={12} minLength={12} />
      </div>
      <div className style={{display: 'flex', justifyContent: 'space-between', width: '95%'}}>
        <div className="from">
          <label htmlFor="fname">Shop Open Time</label>
          <input type="time" required />
        </div>
        <div className="from">
          <label htmlFor="fname">Shop Close Time</label>
          <input type="time" required />
        </div>
      </div>
      <div className="from">
        <label htmlFor="fname">GST Number</label>
        <input type="number" placeholder="06AAKFD9709P2ZP" minLength={15} maxLength={15} />
      </div>
      <div className="from">
        <label htmlFor="fname">About Your Bussiness</label>
        <textarea name="address" id="address" cols={30} rows={10} placeholder="Description" defaultValue={""} />
      </div>
      <div className="from">
        <label htmlFor="fname">Bussiness Service</label>
        <textarea name="address" id="address" cols={30} rows={10} placeholder="Dona_machine" defaultValue={""} />
      </div>
      <div className="from">
        <label htmlFor="fname">Address</label>
        <textarea name="address" id="address" cols={30} rows={10} placeholder="Residence Address" defaultValue={""} />
      </div>
      <div className="from">
        <label htmlFor="fname">Pincode</label>
        <input type="number" placeholder="Pincode" />
      </div>
      <div className="from">
        <label htmlFor="fname">City</label>
        <input type="text" placeholder="City" />
      </div>
      <div className="from">
        <label htmlFor="fname">Select State</label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Bihar">Bihar</option>
          <option value="UP">UP</option>
          <option value="RJ">RJ</option>
        </select>
      </div> 
      <div className="from">
        <label htmlFor="fname">Country</label>
        <input type="text" placeholder="Country" />
      </div>
      <div className="from">
        <label htmlFor="fname">Landmark</label>
        <input type="text" placeholder="Landmark" />
      </div>
      <div className="from">
        <label htmlFor="fname">Select </label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Self">Self</option>
          <option value="Rented">Rented</option>
        </select>
      </div> 
      <div className="from">
        <label htmlFor="fname">Service Type </label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Manufacturer">Manufacturer</option>
          <option value="Srevice Provider">Srevice Provider</option>
          <option value="Partnership">Partnership</option>
          <option value="Recruiment">Recruiment</option>
        </select>
      </div> 
      <div className="from">
        <label htmlFor="fname">Main Category </label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Construction">Construction</option>
          <option value="Technology">Technology</option>
          <option value="Start up">Start up</option>
          <option value="Shop Store">Shop Store</option>
          <option value="Transport">Transport</option>
          <option value="Education">Education</option>
          <option value="Distributorship">Distributorship</option>
          <option value="Partnership">Partnership</option>
          <option value="Agency">Agency</option>
          <option value="Job and Manpower">Job and Manpower</option>
          <option value="Work Maintainance">Work Maintainance</option>
          <option value="Franchise">Franchise</option>
          <option value="New Category">New Category</option>
        </select>
      </div> 
      <div className="from">
        <label htmlFor="fname">Sub Category </label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Carpenter contractors">Carpenter contractors</option>
          <option value="Civil contractors">Civil contractors</option>
        </select>
      </div> 
      <div className="from">
        <label htmlFor="fname">Select Your Govt.ID</label>
        <select name="select" id="select" placeholder="Select any one">
          <option value="Aadhar card">Aadhar Card</option>
          <option value="Voter ID">Voter ID</option>
          <option value="PAN Card">PAN Card</option>
          <option value="PUNE">Driving Liecence</option>
        </select>
      </div>
      <div className="from">
        <label htmlFor="fname">Upload ID Card</label>
        <img id="imgFileUpload" alt="Select File" title="Select File" src="./img/Profile/Profile.png" style={{cursor: 'pointer', width: '30%', border: '1px dashed', borderRadius: 5, padding: 4}} />
        <span id="spnFilePath" />
        <input type="file" id="FileUpload1" style={{display: 'none'}} />
      </div>
      <div className="from">
        <label htmlFor="fname">Upload Banner</label>
        <img id="imgFileUpload" alt="Select File" title="Select File" src="./img/Profile/Profile.png" style={{cursor: 'pointer', width: '30%', border: '1px dashed', borderRadius: 5, padding: 4}} />
        <span id="spnFilePath" />
        <input type="file" id="FileUpload1" style={{display: 'none'}} />
      </div>
    </form>
    <div className="input-tag" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button className="btn" type="submit"><i className="fas fa-paper-plane" /><a href="#">Continue</a></button>
    </div>
 
  </div>
</div>
</Wrapper>
  )
}
const Wrapper = styled.section`
.desktop .hero{
    width: 100%;
    height: 92vh;
    background-color: rgba(68, 68, 68, 0.733);
    background-image: url(welcome.jpg);
    background-position: center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:end;

}
.desktop .hero h4{
    color: white;
    font-weight: 600;
    background: linear-gradient( to bottom, rgb(41, 116, 179),rgba(255, 0, 0, 0.6));
    width: 40vh;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
   
}
.desktop ::-webkit-scrollbar { display: none; }
.desktop .form{
    width: 70%;
    height: 77vh;
    background-color: rgb(0 0 0 / 71%);
    border-radius: 15px;
    margin-bottom: 12px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll; 
}
.desktop form{
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:76vh;
    margin-top: 15px;
}
.desktop #imgFileUpload{
    cursor: pointer;
    /* margin-top: 18vh; */
    border: 1px solid white;
    padding: 6px;
    border-radius: 10px;
    width: 80px;
}
.desktop .hero .input-tag h6 span{
color: red;

}
.desktop .input-tag{
    margin-top: 5px;
}
.desktop .hero .input-tag input,textarea ,select{
    width: 100%;
    height: 5vh;
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
}
.desktop .hero .input-tag select option{
    color: black;
    
}

.desktop h3{
    margin: 5px;
    justify-content: center;
    display: flex;

}
.desktop #myCheck{
    width: 5vh;
    height: 18px;
    
}
.desktop form button{
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
.desktop form button:hover{
    color: #fff;
    background-color: rgb(1, 156, 1);
}
                    /* Upload multiple image css */

.desktop .quote-imgs-thumbs {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin: 1.5rem 0;
  padding: 0.75rem;
}
.desktop .quote-imgs-thumbs--hidden {
  display: none;
}
.desktop .img-preview-thumb {
  background: #fff;
  border: 1px solid #777;
  border-radius: 0.25rem;
  box-shadow: 0.125rem 0.125rem 0.0625rem rgba(0, 0, 0, 0.12);
  margin-right: 1rem;
  max-width: 140px;
  padding: 0.25rem;
}




@media(max-width:700px){
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
    background-color: rgba(3, 199, 198, 1);
    color: white;
}
.mob-view .head{
width: 70%;
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
.mob-view form .from input ,textarea ,select{
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
.mob-view .btn{
width: 70%;
/* padding: 3px; */
border: none;
border-radius: 6px;
height: 6vh;
/* margin-bottom: 2px; */
font-size: 14px;
font-weight: 500;
color: white;
background-color:cadetblue;
display: flex;
justify-content: center;
align-items: center;
}
.mob-view .btn:hover{
background-color: rgb(118, 197, 0);
}
.mob-view .btn a{
text-decoration: none;
color: #fff;
}

.mob-view footer{
display: flex;
justify-content: space-between;
align-items: center;

border-radius: 15px 15px 0 0 ;
/* margin-bottom: 0; */
padding: 5px;
box-shadow: 0px -5px 3px rgb(15 15 15 / 20%);
}
.mob-view footer .home{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 12px;
font-weight: 500;
color: dimgrey;
}
.mob-view .foot{
padding-top: 24px;
}
}
`;

export default ShopUpload