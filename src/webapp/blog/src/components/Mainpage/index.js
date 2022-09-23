import './Mainpage.css'
import { Link } from 'react-router-dom'

const Mainpage = () => {
    return (
        <div className='Questions'>
            <label className='search'>Search</label>
            <Link to='/'>
                <button className='questions' type='submit'>
                    Questions
                </button>
            </Link>
            <h1>teste </h1>
        </div>

    )
}

export default Mainpage