import './App.css';
import { PatientProvider } from "./PatientContext"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './components/Index';
import { Dashboard } from './components/Dashboard';
import { Plannification } from './components/Plannification';
import MedicalChat from './components/AiAssistant';
import {PatientsList} from "./components/PatientList"
import {PatientDetails} from "./components/PatientDetails"
import {allPatients} from "./data"
import {Propriétaires} from "./components/Propriétaires"
import {MultiChannelInbox} from "./components/multichannel-inbox"
import {PatientFile} from "./components/PatientFile"
function App() {
  return (
    <PatientProvider>
    <BrowserRouter>
      <Routes>
        {/* Main Layout route */}
        <Route path="/" element={<Index />}>
          {/* Nested routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="ia-assistant" element={<MedicalChat/>} />
          <Route path="planning" element={<Plannification/>} />
          <Route path="patient" element={<PatientsList  patients = {allPatients}/>} />
          <Route path="/patient/:id" element={<PatientDetails patients={allPatients} />} />
          <Route path="/Propriétaires" element={<Propriétaires />} />
          <Route path="/boite-de-recption" element={<MultiChannelInbox />} />
          <Route path="/patientDetail/:id" element={<PatientFile />} />
    

          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
    </PatientProvider>
  );
}

export default App;
