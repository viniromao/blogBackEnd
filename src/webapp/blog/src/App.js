import FormRegister from "./components/FormRegister";
import LoginForm from "./components/LoginForm";
// import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <FormRegister/>
      <LoginForm/>
      {/* <Routes>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<FormRegister />}/>
      </Routes>    */}
    </div>
  );
}

export default App;
