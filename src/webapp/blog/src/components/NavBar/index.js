import './NavBar.css'
import { Link } from 'react-router-dom'
// import logo from '/imgs/logo.png';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/">
                           {/* <img src={logo} alt='Stacklogo' /> */}
                        <h1>TechBlog</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar 