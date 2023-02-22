import React from 'react';
import ReactDom from 'react-dom';
import './OtpContainer.css';
import OtpInput from 'react18-input-otp'
import './OtpInput.css'


function OtpContainer({ handleChange, otp, disableInput }) {
  return (
    <div className="App">
      <OtpInput value={otp} onChange={handleChange} numInputs={4} separator={<span style={{ margin: '0.3rem' }} />} isInputNum={true} shouldAutoFocus inputStyle="inputStyle" isDisabled={disableInput} />
    </div>
  );
}
export default OtpContainer;