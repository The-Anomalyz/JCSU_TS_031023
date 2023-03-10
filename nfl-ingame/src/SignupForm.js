/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignupForm() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDOB] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword( auth, email, password).then((auth) => {
      if (auth){
          navigate('/')
      }
  }).catch(error => alert(error.message))
  };

  return (
    <div className='signup'>
      <div className="signup-form-container">
       <h1>Sign Up</h1>
      <form >
        <h5>First Name</h5>
          <input type="text" value={name} onChange={handleNameChange} />
          <h5>Last Name</h5>
          <input type="text" value={surname} onChange={handleSurnameChange} />
          <h5>Country</h5>
          <input type="text" value={country} onChange={handleCountryChange} />
          <h5>Date of Birth</h5>
          <input type="date" value={dob} onChange={handleDOBChange} />
          <h5>Zip Code</h5>
          <input type="number" value={zip} onChange={handleZipChange} />
          <h5>Email</h5>
          <input type="email" value={email} onChange={handleEmailChange} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} />
        <button className='signup_button' onClick={handleSubmit}>Sign up</button>
      </form>
      <p>
        By Signing-in you agree to our terms of Condition. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
      </p>
    </div>

    </div>
  );
}

export default SignupForm;
