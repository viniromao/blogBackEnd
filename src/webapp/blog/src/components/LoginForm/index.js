import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './Login.css'
import axios from "axios";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = event => {
        setEmail(event.target.value);
    };

    const handleInput2 = event => {
        setSenha(event.target.value);
    };

    function doLogin() {
        if (!email) {
            setErrorMessage("Por favor, insira um endereço de email válido");
            return;
        }

        if (!senha) {
            setErrorMessage("Por favor, insira uma senha válida");
            return;
        }

        axios.post('http://localhost:8080/auth', {
            email: email,
            senha: senha
        })
        .then(function (response) {
            localStorage.setItem('LoginToken', response.data);
            localStorage.setItem('authenticated', true);
            console.log(response);
                window.location.href = '/'; // Redireciona para a main page
        })
        .catch(function (error) {
            setErrorMessage("Credenciais inválidas, tente novamente.");
            console.log(error);
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
                <Link id='forgot'>Forgot your password?</Link>

            </div>
        </div>
    );
};

export default LoginForm;
