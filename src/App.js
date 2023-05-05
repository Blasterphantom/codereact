// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './Components/HomeComponent/HomeComponent.js';
import LoginComponent from './Components/LoginComponent/LoginComponent.js'
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent.js';
import Login from './Components/LoginComponent/LoginComponent.js';
import UserCompleted from './Components/UserKata/UserCompleted.js';
import AdminPage from './Components/AdminPage/AdminPage';

function App() {
  return (
   <BrowserRouter>
   <>
   
   </>
   <Routes>
        {/* the forward slash is the landing page */}
        <Route path='/' element={<Login />} />
        {/* <Route path='/Login' element={<Login />} />
        <Route path='/CreateAccount' element={<CreateAccount />} />
        <Route path='/Dashboard' element={<Dashboard />} /> */}
    </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;