import './NavBarAuthenticated.css'
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
            <Link to="/newpost">
                <button className='write-post-button' >
                    Write a Post
                </button>
            </Link>
        </header>
    )
}

export default NavBar 