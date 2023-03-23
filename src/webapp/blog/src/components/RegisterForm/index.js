import { Link } from 'react-router-dom';
import React, { useState } from "react";

import './RegisterForm.css'
import axios from 'axios'

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleInputSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleInputConfirmSenha = (event) => {
    setConfirmSenha(event.target.value);
  };

  const doRegister = () => {
    if (username == "") {
      alert("Digite o seu nome de usuario.");
      return;
    }
    if (senha.length < 8) {
      alert("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }
    if (senha !== confirmSenha) {
      alert("A senha e a confirmação de senha precisam ser iguais.");
      return;
    }
    axios.post('http://localhost:8080/user/register', {
      username: username,
      email: email,
      senha: senha
    })
    .then(() => {
      window.location.href = '/'; // Redireciona para a main page
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='form-content-right'>
      <img id='tamanhojava' src='/imgs/java.png' alt='javaimage' />
      <form className='form'>
        <h1 className='signup'>Sign Up</h1>
        <h2 className='login-here'>
          If you already have an account,
          you can login <Link className='here' to='/login'>here!</Link>
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            onChange={handleInputUsername}
            placeholder='Enter your username'
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
            required
            minLength='8'
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
            required
            className='form-input'
            type='password'
            name='password2'
            onChange={handleInputConfirmSenha}
            placeholder='Confirm your password'
          />
        </div>
        <button className='form-input-btn' type='button' onClick={doRegister}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
