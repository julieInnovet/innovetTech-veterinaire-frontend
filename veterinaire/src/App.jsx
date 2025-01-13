import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './componets/Dashbord';


function App() {
   
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<p>contact</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
