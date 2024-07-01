import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing"
import Home from "./Pages/Home"
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import CreateStartup from './Pages/CreateStartup';
import HalamanStartup from './Pages/HalamanStartup';

export default function App() {
  return (
      <HashRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<CreateStartup/>} />
        <Route path="/halamanstartup" element={<HalamanStartup/>} />
      </Routes>
    </HashRouter>
  );
}

