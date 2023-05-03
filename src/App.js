// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './Components/HomeComponent/HomeComponent.js';
import LoginComponent from './Components/LoginComponent/LoginComponent.js'
import CreateAccountComponent from './Components/CreateAccountComponent/CreateAccountComponent.js';
import LoginMe from './Components/LoginComponent/LoginComponent.js';

function App() {
  return (
   <>
   <LoginMe/>
   </>
  );
}

export default App;