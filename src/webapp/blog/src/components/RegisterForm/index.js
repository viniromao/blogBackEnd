import { Link } from 'react-router-dom';
import React, { useState } from "react";

import './RegisterForm.css'
import axios from 'axios'

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [confirmSenhaError, setConfirmSenhaError] = useState("");

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
    if (username === "") {
      setUsernameError("Digite o seu nome de usuário.");
      return; //Sai da função doRegister se houver erro.
    } else {
      setUsernameError(""); //Da continuidade ao código se não houver erro.
    }
    if (senha.length < 8) {
      setSenhaError("A senha precisa ter pelo menos 8 caracteres.");
      return;
    } else {
      setSenhaError("");
    }
    if (senha !== confirmSenha) {
      setConfirmSenhaError("A senha e a confirmação de senha precisam ser iguais.");
      return;
    } else {
      setConfirmSenhaError("");
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
          {usernameError && <p className='error-message'>{usernameError}</p>} {/* verifica se a variável usernameError contém algum valor.
           Se usernameError contém um valor, o elemento <p> com a classe error-message é renderizado,
            exibindo o valor da variável usernameError. Caso contrário, nada é renderizado. */}
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
          {senhaError && <p className='error-message'>{senhaError}</p>}
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
          {confirmSenhaError && <p className='error-message'>{confirmSenhaError}</p>}
        </div>
        <button className='form-input-btn' type='button' onClick={doRegister}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
