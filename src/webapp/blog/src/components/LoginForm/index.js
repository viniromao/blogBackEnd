import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './Login.css'
import axios from "axios";





const LoginForm = () => {

    const [email, setEmail] = useState(" ")

    const [senha, setSenha] = useState(" ")
    
      const handleInput = event => {
        setEmail({ email: event.target.value });
      };

      const handleInput2 = event => {
          setSenha({ senha: event.target.value });
        };
        
        function doLogin(){
            console.log(email)
            console.log(senha)
            console.log("doLogin")
            axios.post('http://localhost:8080/auth', {
                email: email,
                senha: senha
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
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
                            name='username'
                            placeholder='Username'
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

export default LoginForm