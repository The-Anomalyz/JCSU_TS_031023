/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import {auth} from './firebase'
import {  signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };


    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword( auth, email, password).then((auth) => {
      if (auth){
          navigate('/')
        }
        }).catch(error => alert(error.message))}

  return (
    <div className='login'>
        <div className='login-container'>
        <h1>Login Page</h1>
        <form >
          <h5>Email</h5>
          <input type="email" value={email} onChange={handleEmailChange}/>
          <h5>Password:</h5>
          <input type="password" value={password} onChange={handlePasswordChange}/>
            <button className='login-button' type="submit" onClick={login}>Login</button>
            <button className='login-button'>Forgot Password</button>
            <button className='login-button-1' >Sign in with Google</button>
            <button className='login-button-1'>Sign in with Facebook</button>
            <button className='login-button-1'>Sign in with Apple</button>
            <h5>Do not have an Account yet?! Sign Up</h5>
            <Link to='/signup'><button className='login-button-1'>Sign Up</button></Link>
            
      </form>
      
        

        </div>

    </div>
  )
}

export default Login
