import './Mainpage.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'

const Mainpage = () => {
    return (
        <>
            <NavBar/>
            <div className='Leftpanel'>
                <div className='form-inputs_search'>
                    <img src='/imgs/grey_search_icon.png' />
                    <input
                        className='form-input_search'
                        type='text'
                        name='search'
                        placeholder='Search' />
                </div>

                <h2>MENU</h2>
                <Link to='/'>
                    <button className='questions' type='submit'>
                        Questions
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Mainpage