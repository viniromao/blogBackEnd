import './Form.css'

const Form = () => {
  return (
    <div className='form'>
      <h1>Sign Up Right Here</h1>
      <label className='form-label'>Username</label>
      <input
        className='form'
        type='text'
        name='username'
        placeholder='Enter your username'
      />
      <label className='form-label'>Password</label>
      <input
        className='form'
        type='text'
        name='password'
        placeholder='Enter your password'
      />
    </div>
  )
}

export default Form