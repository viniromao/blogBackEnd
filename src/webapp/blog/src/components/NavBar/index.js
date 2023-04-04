import './NavBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios';



const NavBar = () => {
    const isAuthenticated = localStorage.getItem("authenticated")
    const logout = async () => {
        try {
          const response = await axios.post('http://localhost:8080/auth/logout', null, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          console.log(response); // apenas para debug
          localStorage.removeItem('authenticated');
          localStorage.removeItem('token');
          window.location.reload(); // recarrega a página para atualizar a interface
        } catch (error) {
          console.error(error);
        }
      };
      
      
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
    <div>
        <Link to="/newpost">
            <button className='write-post-button' >
                Write a Post
            </button>
        </Link>
        <button onClick={logout}>Logout</button>
    </div>
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
