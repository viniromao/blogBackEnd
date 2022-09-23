import FormRegister from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar';
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div className="App">
      <Mainpage/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
