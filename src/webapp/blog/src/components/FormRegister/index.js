import './FormRegister.css'

const FormRegister = () => {
  return (
    <div className='form-content-right'>
      <form className='form'>
          <h1>
            Sign Up
          </h1>
          <h2>
            If you already have an account,<br />
            You can  Login <a href="">here !</a>
          </h2>

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
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
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
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
            />
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
      </form>
    </div>
  );
};

export default FormRegister