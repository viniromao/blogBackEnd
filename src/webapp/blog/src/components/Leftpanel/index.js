import { Link } from 'react-router-dom'
import './Leftpanel.css'

const Leftpanel = () => {
    return (
        <div className='Leftpanel'>
            <div className='form-inputs_search'>
                <img src='/imgs/grey_search_icon.png' alt='searchIcon'/>
                <input
                    className='form-input_search'
                    type='text'
                    name='search'
                    placeholder='Search' />
            </div>
            <h2>MENU</h2>
            <img src='imgs/listicon.png' alt='listIcon' className='listicon'/>
            <Link to='/'>
                <button className='questions' type='submit'>
                    Questions
                </button>
            </Link>
        </div>
    )
}

export default Leftpanel 