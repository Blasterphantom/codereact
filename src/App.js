// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './Components/HomeComponent/HomeComponent.js';
import LoginComponent from './Components/LoginComponent/LoginComponent.js'
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent.js';
import Login from './Components/LoginComponent/LoginComponent.js';
import UserCompleted from './Components/UserKata/UserCompleted.js';
import AdminPage from './Components/AdminPage/AdminPage';
import UserContext from "./UserContext/UserContext.js";
import UserHooks from "./Hooks/UserHooks.js";

function App() {
  return (
    <UserContext.Provider value={UserHooks()}>
    <BrowserRouter>
      <div id='startPage' className='App'>
        <Routes>
              <Route path="/" element={<UserCompleted />} />
              <Route path="Login" element={<LoginComponent/> } />
              <Route path="CreateAccount" element={<CreateAccountComponent/> } />
              <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;