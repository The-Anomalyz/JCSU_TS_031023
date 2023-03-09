/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
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
        <button className='signup_button'>Sign up</button>
      </form>
      <p>
        By Signing-in you agree to our terms of Condition. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
      </p>
    </div>

    </div>
    /*React.createElement('div', { className: 'signup-form' },
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'email' }, 'Email:'),
          React.createElement('input', { type: 'email', id: 'email', name: 'email', value: formData.email, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'password' }, 'Password:'),
          React.createElement('input', { type: 'password', id: 'password', name: 'password', value: formData.password, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'firstName' }, 'First Name:'),
          React.createElement('input', { type: 'text', id: 'firstName', name: 'firstName', value: formData.firstName, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'lastName' }, 'Last Name:'),
          React.createElement('input', { type: 'text', id: 'lastName', name: 'lastName', value: formData.lastName, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'dob' }, 'Date of Birth:'),
          React.createElement('input', { type: 'date', id: 'dob', name: 'dob', value: formData.dob, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'country' }, 'Country:'),
          React.createElement('input', { type: 'text', id: 'country', name: 'country', value: formData.country, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'zipcode' }, 'Zip Code:'),
          React.createElement('input', { type: 'text', id: 'zipcode', name: 'zipcode', value: formData.zipcode, onChange: handleInputChange, required: true })
        ),
        React.createElement('button', { type: 'submit' }, 'Sign Up')
      )
    )*/
  );
}

export default SignupForm;
