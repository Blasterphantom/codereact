import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './Components/HomeComponent/HomeComponent.js';
import LoginComponent from './Components/LoginComponent/LoginComponent.js'
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent.js';
import UserCompleted from './Components/UserCompleted/UserCompleted';

function App() {
  return (
    <BrowserRouter>
      <div id='startPage' className='App'>
        <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="Login" element={<LoginComponent/> } />
              <Route path="CreateAccount" element={<CreateAccountComponent/> } />
              <Route path="UserCompleted" element={<UserCompleted />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;