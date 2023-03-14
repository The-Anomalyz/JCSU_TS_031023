/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";

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
  const db = getDatabase();
  const userRef = ref(db, "users");
  const newUser = {
    name: name,
    surname: surname,
    country: country,
    dob: dob,
    zip: zip,
    email: email
  }
  const [zipError, setZipError] = useState('');

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
    
    if (event.target.value.length !== 5) {
      setZipError('Zip code must be 5 digits');
    } else {
      setZipError('');
    }
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipError) {
      return;
    }
    createUserWithEmailAndPassword( auth, email, password).then((auth) => {
      if (auth){
          navigate('/')
      }
  }).catch(error => alert(error.message))

  push(userRef, newUser)
  .then(() => {
    console.log("Data written to database");
  })
  .catch((error) => {
    console.error("Error writing data to database: ", error);
  });

  };

  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
  ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
  ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
  ,"Yemen","Zambia","Zimbabwe"];

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
        <select className='country-selector' value={country} onChange={handleCountryChange}>
          <option>Select Your Country</option>
        {countries.sort().map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
          <h5>Date of Birth</h5>
          <input type="date" value={dob} onChange={handleDOBChange} />
          <h5>Zip Code</h5>
          <input type="number" value={zip} onChange={handleZipChange} />
          {zipError && <div className="error-message">{zipError}</div>}
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
