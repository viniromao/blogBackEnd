import { Link } from 'react-router-dom';
import React, { useState, useRef } from "react";
import './Login.css'
import axios from "axios";

const LoginForm = () => {

    const [email, setEmail] = useState(" ")
    const [senha, setSenha] = useState(" ")
    const [erro, setErro] = useState(null)
    const buttonRef = useRef(null);


    const handleInput = event => {
        setEmail({ email: event.target.value });
    };

    const handleInput2 = event => {
        setSenha({ senha: event.target.value });
    };

    function doLogin() {
        buttonRef.current.classList.add("button-shake");
        axios.post('http://localhost:8080/auth', {
            email: email.email,
            senha: senha.senha
        })
        .then(function (response) {
            localStorage.setItem('LoginToken', response.data);
            localStorage.setItem('authenticated', true);
            console.log(response);
            window.location.href = '/'; // Redireciona para a main page
        })
        .catch(function (error) {
            console.log(error);
            setErro("Email ou senha incorretos. Por favor, tente novamente.")
            document.getElementById("form-input-btn_login").classList.add("button-shake");;
            
        setTimeout(function() {
        document.getElementById("form-input-btn_login").classList.remove("button-shake");
        }, 500); 
        });
    }

    return (
        <div className='form-content-right_login'>
            <img id='javalogin' src='/imgs/java_logo_white.png' alt='javalogin' />
            <div className='form_login'>
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
                <   button ref={buttonRef} onClick={doLogin} className='form-input-btn_login'>
                    Login
                </button>
                {erro && <div className='form-error_login'>{erro}</div>}
                <Link id='forgot'>Forgot your password?</Link>
            </div>
        </div>
    );
};

export default LoginForm
