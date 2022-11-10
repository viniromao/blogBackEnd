import { Link } from 'react-router-dom';
import React, { useState } from "react";

import './RegisterForm.css'
import axios from 'axios'


const RegisterForm = () => {
  const [email, setEmail] = useState(" ")
  const [username, setUsername] = useState(" ")
  const [senha, setSenha] = useState(" ")


function doRegister() {
    axios.post('http://localhost:8080/user/register', {
        username: username.username,
        email: email.email,
        senha: senha.senha
    })
}

    const handleInputSenha = event => {
        setSenha({ senha: event.target.value });
    };

    const handleInputEmail = event => {
        setEmail({ email: event.target.value });
    };

    const handleInputUsername = event => {
        setUsername({ username: event.target.value });
    };

  return (
    <div className='form-content-right'>
      <img id='tamanhojava' src='/imgs/java.png' alt='javaimage' />
      <form className='form'>
          <h1 className='signup'>
            Sign Up
          </h1>
          <h2 className='signup'>
            If you already have an account,
          You can  Login <Link className='here' to='/login' style={{ textDecoration: 'none' }}>here !</Link >
          </h2>

          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              onChange={handleInputUsername}
              placeholder= 'Enter your username'
          />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              onChange={handleInputEmail}
              placeholder='Enter your email'
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              onChange={handleInputSenha}
              placeholder='Enter your password'
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>

            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
            />
          </div>
          <Link to='/login'>
          <button className='form-input-btn' type='submit' onClick={doRegister}>
            Sign up
          </button>
          </Link>
      </form>
    </div>
  );
}



export default RegisterForm