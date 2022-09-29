import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='nav-bar'>
                <div className='techbloglink'>
                    <Link to="/">
                    <img src='/imgs/logo.png' alt='logo-navbar' className='logo-navbar' />
                    </Link>
                    <Link id='h1techblog' to="/">
                        <h1 id='h1techblog'>TechBlog</h1>
                    </Link>
                </div>
                    <button className='write-post-button'>
                        Write a Post
                    </button>
                <div>
                    <ul>
                        <li className='links_mainpage'>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className='links_mainpage'>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
            </div>        
        </header>
    )
}

export default NavBar 