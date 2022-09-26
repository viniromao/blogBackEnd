import FormRegister from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import NewPost from "./components/NewPost";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Mainpage from "./components/Mainpage";
import SearchBar from "./components/SearchBar";
import BookData from "./components/SearchBar/Data.json"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchBar placeholder="Search..." data={BookData} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
