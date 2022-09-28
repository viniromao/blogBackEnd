import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav >
            <ul className='nav-bar'>
                <div className='login-register'>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </div>
                <li>
                    <Link to="/">
                    <img src='/imgs/logo.png' className='logo-navbar' />
                        <h1>TechBlog</h1>
                    </Link>
                </li>
                <li>
                    <button className='write-post-button'>
                        Write a Post
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar 