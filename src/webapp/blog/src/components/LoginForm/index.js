import './Login.css'

const LoginForm = () => {
    return (
        <div className='form-content-right_login'>
                <form className='form_login'>
                    <div className='form-inputs_login'>
                        <label className='form-label_login'>Username</label>
                        <input
                            className='form-input_login'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                        />
                    </div>
                    <div className='form-inputs_login'>
                        <label className='form-label_login'>Password</label>
                        <input
                            className='form-input_login'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    <button className='form-input-btn_login' type='submit'>
                        Login
                    </button>
                    <a href="">Forgot your password?</a>
                </form>
        </div>
    );
};

export default LoginForm