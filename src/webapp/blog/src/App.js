import FormRegister from "./components/RegisterForm"; 
import LoginForm from "./components/LoginForm";
import NewPost from "./components/NewPost";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Navbar from './components/NavBar';
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/newpost" element={<NewPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
