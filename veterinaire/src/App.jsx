import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './components/Index';
import { Dashboard } from './components/Dashboard';
import { Plannification } from './components/Plannification';
import MedicalChat from './components/AiAssistant';
import {PatientsList} from "./components/PatientList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout route */}
        <Route path="/" element={<Index />}>
          {/* Nested routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ia-assistant" element={<MedicalChat/>} />
          <Route path="planning" element={<Plannification/>} />
          <Route path="patient" element={<PatientsList/>} />


    

          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
