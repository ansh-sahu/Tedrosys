import React from 'react'
import styled from 'styled-components'
import '../Css/mob_enquery.css'
const mob_enquery = () => {
  return (
  <Wrapper>
   <div className="mob-views">
  {/* HEADER SECTION */}
  <header>
    <div className="head">
      <i className="fa-solid fa-chevron-left" />
      <span>Send Enquiry</span>
    </div>
  </header>
  {/* Enquiry Form Section */}
  <div className="Enquiry">
    <form action >
      <label htmlFor="fname">Full Name</label>
      <input type="text" placeholder="Full Name" required />
      <label htmlFor="email">Your Email I'd</label>
      <input type="email" placeholder="Email" required />
      <label htmlFor="number">Your Contact Number</label>
      <input type="text" placeholder="Mobile Number" maxLength={10} required />
      <label htmlFor="message">Massage</label>
      <textarea name="massage" id cols={30} rows={4} placeholder="Add a comment" defaultValue={""} />
    </form>
  </div>
  <div className="btns">
    <button type="submit">Send</button>
  </div>
  {/* Footer Section */}
  <div className="foot">
    <footer>
      <div className="home">
        <i className="bi bi-house" />
        <span>Home</span>
      </div>
      <div className="home">
        <i className="bi bi-columns-gap" />
        <span>Categories</span>
      </div>
      <div className="home">
        <i className="bi bi-plus-square" />
        <span>Add Post</span>
      </div>
      <div className="home">
        <i className="bi bi-file-earmark-post" />
        <span>Lead</span>
      </div>
      <div className="home">
        <i className="bi bi-person-square" />
        <span>Profile</span>
      </div>
    </footer>
  </div>
</div>
</Wrapper>
  )
}

const Wrapper = styled.section`
.mob-views header {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
}

.mob-views .head {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
}

.mob-views .head span {
  font-size: 18px;
  font-weight: 500;
}

.mob-views .Enquiry form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  font-weight: 400;
  margin-top: none;
  width: none;
  display: flex;
  flex-direction: none;
  justify-content: none;
  height: none;
}

.mob-views .Enquiry form label {
  padding-top: 5px;
  font-size: 15px;
}

.mob-views .Enquiry form input {
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  padding: 6px;
  font-size: 14px;
  width: 100%;
}

.mob-views .Enquiry form textarea {
  border: 1px solid #E2E2E2;
  border-radius: 8px;
}

.mob-views .btns {
  width: 100%;
  /* margin: 0; */
  padding-top: 60px;
  display: flex;

  justify-content: center;

}

.mob-views button {
  width: 90%;
  border: 1px solid;
  height: 7vh;
  background-color: #4CA6A8;
  color: white;
  border-radius: 10px;
  font-weight: 600;
}

.mob-views footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 15px 15px 0 0;
  /* margin-bottom: 0; */
  padding: 5px;
  box-shadow: 0px -5px 3px rgb(15 15 15 / 20%);
}

.mob-views footer .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: dimgrey;
}

.mob-views .foot {
  padding-top: 24px;
}
`;
export default mob_enquery;
