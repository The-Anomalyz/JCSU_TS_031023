/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import './Login.css'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
          <input
            type="email"
            id="email"
            value={email}
            required
          />
          <h5>Password:</h5>
          <input
            type="password"
            id="password"
            value={password}
            required
          />
            <button className='login-button' type="submit" onClick={login}>Login</button>
            <button className='login-button'>Forgot Password</button>
            <button className='login-button-1' >Sign in with Google</button>
            <button className='login-button-1'>Sign in with Facebook</button>
            <button className='login-button-1'>Sign in with Apple</button>
      </form>
      
        

        </div>

    </div>
  )
}

export default Login
