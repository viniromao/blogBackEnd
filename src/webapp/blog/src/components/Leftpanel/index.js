import { Link } from 'react-router-dom'
import Searchbar from '../SearchBar'
import './Leftpanel.css'
import BookData from "../SearchBar/Data.json"

const Leftpanel = () => {
    return (
        <div className='Leftpanel'>
            <Searchbar placeholder="Search..." data={BookData}/>
            <h2>MENU</h2>
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