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
            <ul className='ul_mainpage'>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <h5 id='h5color'>or</h5>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar 