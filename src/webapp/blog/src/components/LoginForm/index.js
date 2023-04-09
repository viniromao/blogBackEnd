import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import './Login.css'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = event => setEmail(event.target.value);
  const handleInput2 = event => setSenha(event.target.value);

  const doLogin = () => {
    if (!email) {
      setErrorMessage("Por favor, insira um endereço de email válido");
      return;
    }

    if (!senha) {
      setErrorMessage("Por favor, insira uma senha válida");
      return;
    }

    axios.post('http://localhost:8080/auth', { email, senha })
      .then(({ data }) => {
        localStorage.setItem('LoginToken', data);
        localStorage.setItem('authenticated', true);
        window.location.href = '/';
      })
      .catch(() => {
        setErrorMessage("Credenciais inválidas, tente novamente.");
      });
  }

  return (
    <div className='form-content-right_login'>
      <img id='javalogin' src='/imgs/java_logo_white.png' alt='javalogin' />
      <div className='form_login'>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        <div className='form-inputs_login'>
          <input
            className='form-input_login'
            type='text'
            name='Email'
            placeholder='Email'
            onChange={handleInput}
          />
        </div>
        <div className='form-inputs_login'>
          <input
            className='form-input_login'
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleInput2}
          />
        </div>
        <button onClick={doLogin} className='form-input-btn_login'>
          Login
        </button>
        <div id='forgot'>
          Don't have an account? 
          <Link id='forgot' to="/register"> Register here!</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
