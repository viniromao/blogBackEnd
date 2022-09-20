import './Login.css'

const LoginForm = () => {
    return (
        <div className='form-content-right2'>
        
            <body background="Dashboard Login.jpg">
                <form className='form'>
                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Login
                    </button>
                    <a href="">Forgot your password?</a>
                </form>
            </body>
        </div>
    );
};

export default LoginForm