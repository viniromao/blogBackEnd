import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const isAuthenticated = localStorage.getItem("authenticated")

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

            {/* Renderiza o botão "Write a Post" apenas se o usuário estiver autenticado */}
            {isAuthenticated && (
                <Link to="/newpost">
                    <button className='write-post-button' >
                        Write a Post
                    </button>
                </Link>
            )}

            {/* Renderiza o botão de login e registro apenas se o usuário não estiver autenticado */}
            {!isAuthenticated && (
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
            )}
        </header>
    )
}

export default NavBar
