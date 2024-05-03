import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast"; //using react hot toast to fetch conditions and display, stated inside authController
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="route">
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
