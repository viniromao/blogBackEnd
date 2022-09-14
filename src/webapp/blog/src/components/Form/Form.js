import './Form.css'

const Form = () => {
    return(
    <div className='form'>
        <h1>TESTE</h1>
          <label className='form-label'>Username</label>
          <input
            className='form'
            type='text'
            name='username' 
            placeholder='Enter your username'
          />
        </div>
    )
}

export default Form