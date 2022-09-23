import FormRegister from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<FormRegister />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
