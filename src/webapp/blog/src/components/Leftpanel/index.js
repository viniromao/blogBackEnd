import { Link } from 'react-router-dom'
import Searchbar from '../SearchBar'
import bookdata from '../SearchBar/Data.json'
import './Leftpanel.css'
import BookData from "../SearchBar/Data.json"

const Leftpanel = () => {
    return (
        <div className='Leftpanel'>
            <Searchbar placeholder="Search..." data={BookData} />
            <h2 id='h2menu_mainpage'>MENU</h2>
            <img src='imgs/listicon.png' alt='listIcon' className='listicon' />
            <Link to='/'>
                <button className='questions' type='submit'>
                    Questions
                </button>
            </Link>
        </div>
    )
}

export default Leftpanel 