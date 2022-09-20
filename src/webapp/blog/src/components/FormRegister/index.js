import './FormRegister.css'

<<<<<<< HEAD

const FormRegister = () => {
  return (
    <div className='form-content-right'>
        <img id='tamanhojava' src="/imgs/java.png" alt="imagem java"/>

      <form className='form'>
          <h1 className='signup'>
            Sign Up
          </h1>
          <h2 className='signup'>
            If you already have an account,<br />
            You can  Login <a className='here' href="">here!</a>
=======
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
>>>>>>> be16715f2cce17ae980626fc62dc39b0d1ccc0f0
          </h2>

          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
<<<<<<< HEAD
              placeholder= 'Enter your username'
=======
              placeholder='Enter your username'
>>>>>>> be16715f2cce17ae980626fc62dc39b0d1ccc0f0
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
<<<<<<< HEAD
            <img id='email' src='/imgs/email.png' alt='email' />
=======
>>>>>>> be16715f2cce17ae980626fc62dc39b0d1ccc0f0
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
<<<<<<< HEAD
            
=======
>>>>>>> be16715f2cce17ae980626fc62dc39b0d1ccc0f0
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