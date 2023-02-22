import React from 'react';
import  ReactDOM  from 'react';
import './OtpInput.css';
class OtpComp extends React.Component {
  constructor(props) {
  super(props);
  let otpArray = (new Array(this.props.numInputs)).fill("");
  this.state = {
  otp: otpArray
  };
  this.otp0 = React.createRef();
  }
  componentDidMount() {
  console.log(this.refs)
  this.refs.otp0.focus();
  }
  handelChange(event, index){
  let fieldValue =  (/^[0-9]{1,1}$/.test(+event.target.value))?event.target.value:""
  let field = event.target;
  let otpFields = this.state.otp;
  otpFields[index] = fieldValue;
  console.log(otpFields)
  this.setState({otp:otpFields})
  this.props.handleChange(this.state.otp.join(""))
  if (fieldValue!="") {
  event.preventDefault();
  let next = this.refs[field.name].nextSibling;
  if (next && next.tagName === "INPUT") {
  this.refs[field.name].nextSibling.focus();
  }
  }
  }
  handleKeyDown(event, index){
  if (event.keyCode===8  && event.target.value.length===0) {
  event.preventDefault();
  let previous = this.refs[event.target.name].previousSibling;
  console.log(previous)
  if (previous && previous.tagName === "INPUT") {
  this.refs[event.target.name].previousSibling.focus();
  }
  }
  }
  render() {
  return (
  <div>
 
  {[...Array(this.props.numInputs)].map((otp, index)=>{
  return (
  <input type="text"
  key={index}
  name={'otp'+index}
  maxLength="1"
  ref={'otp'+index}
  onKeyDown = {(event)=>this.handleKeyDown(event, index)}
  onChange = {(event)=>this.handelChange(event, index)}
  value = {this.state.otp[index]}
  className="otp-input-fields"
  />
  )
  })}
  </div>
  );
  }
  }
  export default OtpComp;
  /////////////Otp.css//////////////////////
  // .otp-input-fields {
  //       margin-right: 10px;
  //       width: 30px;
  //       text-align: center;
  // }

