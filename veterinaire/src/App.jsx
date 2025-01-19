import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  MedicalChat  from './components/AiAssistant'; // AIChatAssistant component
import Index from "./components/Index";  // Index layout component
import { Home } from "./components/Home";  // Main Home component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<Index />}>
          {/* Default route */}
          <Route index element={<Home />} />
          {/* Additional routes */}
          <Route path="/ia-assistant" element={<MedicalChat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
