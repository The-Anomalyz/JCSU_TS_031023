/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import './Login.css'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <button className='login-button' type="submit">Login</button>
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
