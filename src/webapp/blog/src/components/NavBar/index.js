import './NavBar.css'
import { Link } from 'react-router-dom'
// import logo from 'src/imgs/logo.png';

const NavBar = () => {
    return (
        <nav>
            <h1>Questions</h1>
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
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar 