import { Link } from 'react-router-dom';
import './Login.css'

const LoginForm = () => {
    return (
        <div className='form-content-right_login'>
            <img id='javalogin' src='/imgs/java_logo_white.png' alt='javalogin' />
                <form className='form_login'>
                    <div className='form-inputs_login'>
                        <input
                            className='form-input_login'
                            type='text'
                            name='username'
                            placeholder='Username'
                        />
                    </div>
                    <div className='form-inputs_login'>
                        <input
                            className='form-input_login'
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    <button className='form-input-btn_login' type='submit'>
                        Login
                    </button>
                    <Link id='forgot'>Forgot your password?</Link> 
                </form>
        </div>
    );
};

export default LoginForm